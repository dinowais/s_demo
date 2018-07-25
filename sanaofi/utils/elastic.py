import elasticsearch


class CustomElasticSearch():
    def __init__(self, host, port, auth, timeout=50):
        self.host = host
        self.port = port
        self.es = elasticsearch.Elasticsearch(host=host, port=port, http_auth=auth)

    def load(self, data, index, doc_type, doc_id):
        """ creates the index"""
        try:
            res = self.es.index(index=index, doc_type=doc_type, id=doc_id, body=data)
            return res
        except Exception as e:
            print e,"$$$$$"
            return e

    def update(self, index, doc_type, body, id):
        return self.es.update(index=index, doc_type=doc_type, body={"doc":body}, id=id)
                
    def fetch(self, index, doc_type, dsl_query, offset, limit, aggs=None, fields=[]):
        body = {
            "_source": fields,
            "from": offset,
            "size": limit,
            "query": dsl_query,
        }

        if aggs:
            body = {
                "_source": fields,
                "from": offset, "size": limit,
                "query": dsl_query,
                "aggs": aggs
            }

        try:
            es_result = self.es.search(index=index, doc_type=doc_type, body=body)
            return es_result
        except Exception as e:
            return {"status": "error", "message": "Exception: " + str(e)}



if __name__ == '__main__':
    import simplejson

    es = CustomElasticSearch(host="127.0.0.1", port=9200)
    es.load({}, index="test", doc_type="all", doc_id='1')
