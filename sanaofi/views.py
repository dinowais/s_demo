from __future__ import division
# Create your views here.
import datetime
import json
from datetime import timedelta

from django.core.serializers.json import DjangoJSONEncoder
from django.db import connection
from django.db.models import Count, F
from django.http import HttpResponse
from django.views.generic import TemplateView, View

# from sanaofi.utils.elastic import CustomElasticSearch

from demo_san.settings import ES_PORT, ES_BACKEND, ES_HOST, ES_AUTH
from elasticsearch import Elasticsearch


class DashboardView(TemplateView):
    template_name = 'net_cloud.html'

    def get(self, request, *args, **kwargs):
        response = self.render_to_response(context={})
        return response


# class NetworkView(TemplateView):
#     template_name = 'network.html'
#
#     def get(self, request, *args, **kwargs):
#         query = """select drug_name, group_concat(ADV_EFFECTS) as adv_effect,count(*) as count from pv_social_drug as dr  inner join pv_social_data as da on da.ARTICLE_ID =dr.ARTICLE group by drug_name order by count desc limit 10;"""
#         # todo get top5 posts
#         cursor = connection.cursor()
#         cursor.execute(query, {})
#         fields = map(lambda x: x[0], cursor.description)
#         items = cursor.fetchall()
#         lst = []
#         for item in items:
#             results = dict(zip(fields, item))
#             data = {}
#             drug_name = str(results.get('drug_name', ""))
#             count = results.get('count')
#             adv_effect = set(
#                 [str(k.replace("u'", "").replace("'", "")) for k in results.get('adv_effect').split(',') if k])
#             graphs_nodes = self.create_graph(drug_name, adv_effect)
#             edges = self.create_edge(drug_name, adv_effect)
#             lst.append({"node": graphs_nodes, "edge": edges})
#
#         data = {
#             'lst': lst,
#         }
#         return self.render_to_response(context=data)
#
#     def create_graph(self, drug_name, adv_effect):
#         lst = [{"id": drug_name, "label": drug_name}]
#         self.create_node(adv_effect, lst)
#         return lst
#
#     def create_node(self, adverse_effects, lst):
#         for index, value in enumerate(adverse_effects):
#             lst.append({"id": value, "label": value})
#
#     def create_edge(self, name, adverse_effects):
#         lst = []
#         for index, value in enumerate(adverse_effects):
#             lst.append({"from": name, "to": value})
#         return lst


class NetworkCloudView(TemplateView):
    template_name = 'network.html'

    def get(self, request, *args, **kwargs):

        es = Elasticsearch([{"host": ES_BACKEND, "port": ES_PORT}], timeout=50)
        query_locations = {
            "_source": ["synonym", "type",'child','parent','ae'],
            "query": {
                "match_all": {}
            }
        }
        es_response = es.search(index='sanofi', doc_type='sanofi', size=40, body=query_locations)
        adv_ef = dict()
        nodes_child = list()
        results = es_response['hits']['hits']
        print results
        for record in results:
            data = record.get('_source')
            synonym_list = data.get('synonym')
            synonym_list = synonym_list if synonym_list else []
            for th in synonym_list:
                term = adv_ef.get(th)
                if term:
                    term['weight'] += 1
                else:
                    adv_ef[th] = {
                        'name': th,
                        'weight': 1,
                        'type': 'synonym'
                    }

        for record in adv_ef:
            nodes_child.append({"name": adv_ef[record].get('name'), "weight": adv_ef[record].get('weight')})
        drug_name = "Abdomenal Pain"
        parent_color = {
            'border': '#275f75',
            'highlight': {
                'border': '#275f75',
            },
            'hover': {
                'border': '#275f75',
            }
        }
        ae_color = {
            'border': '#d11414',
            'highlight': {
                'border': '#f90404',
            },
            'hover': {
                'border': '#f90404',
            }
        }
        event_color = {
            'border': '#d11414',
            'highlight': {
                'border': '#d11414',

            },
            'hover': {
                'border': '#275f75',
            }
        }
        children_color = {
            'border': '#275f75',
            'highlight': {
                'border': '#275f75',

            },
            'hover': {
                'border': '#275f75',
            }
        }
        parent_node_color = {
            'border': '#275f75',
            'highlight': {
                'border': '#275f75',

            },
            'hover': {
                'border': '#275f75',
            }
        }

        parent_font = {
            'color': '#275f75',
            'size': 35,
            'face': 'arial',
            'align': 'center'
        }
        ae_font = {
            'color': '#f90404',
            'size': 28,
            'face': 'arial',
            'align': 'center'
        }

        parent_node = {'id': drug_name, 'label': drug_name.capitalize(), 'color': parent_color,
                       'font': parent_font, 'borderWidth': 2, 'scaling': {'min': 1, 'max': 20}}

        nodes = self.create_node(nodes_child)
        nodes.append(parent_node)
        edges = self.create_edges(drug_name, nodes_child)
        lst = {
            'node': nodes,
            'edge': edges,
            'font': {
                'color': '#275f75',
                'size': 15,
                'face': 'arial',
                'align': 'center'
            }
        }

        data = {
            'lst': lst,
        }
        return self.render_to_response(context=data)

    def create_edges(self, drug_name, adv_ef):
        lst = list()
        for index, value in enumerate(adv_ef):
            lst.append({"to": str(value.get('name')), "from": drug_name})
        return lst

    def create_node(self, adv_ef):
        lst = list()
        for index, value in enumerate(adv_ef):
            mass = value.get('weight') * .20
            lst.append({'id': str(value.get('name')), 'label': str(value.get('name')) + ' (' + str(value.get('weight'))
                                                               + ')', 'borderWidth': 2, 'mass': mass})
        return lst

# class NetworkCloudsView(TemplateView):
#     template_name = 'networks.html'
#
#     def get(self, request, drug_name, *args, **kwargs):
#         data = {
#             'drug_name': drug_name,
#         }
#         return self.render_to_response(context=data)
