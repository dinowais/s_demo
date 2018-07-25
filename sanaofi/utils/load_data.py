import os
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)
os.environ['DJANGO_SETTINGS_MODULE'] = 'demo_san.settings'
from elastic import CustomElasticSearch
from dummy_data import DUMMY_DATA



class LoadDataElasticSearch:
    """ Loads and updates the index """

    def __init__(self, **kwargs):
        pass

    def index_to_es(self):
        es = CustomElasticSearch(host='45.55.133.43', port=2654, auth='')
        for record in DUMMY_DATA:
            es.load(data=record, index='sanofi', doc_type='sanofi',
                    doc_id=record['term'])


if __name__ == '__main__':
    LoadDataElasticSearch().index_to_es()
