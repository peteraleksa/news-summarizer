import json
import os.path
import decimal
import datetime
import six
from avrogen.dict_wrapper import DictWrapper
from avrogen import avrojson
from avro.schema import RecordSchema, make_avsc_object
from avro import schema as avro_schema
from typing import ClassVar, List, Dict, Union, Optional, Type


def __read_file(file_name):
    with open(file_name, "r") as f:
        return f.read()
        

def __get_names_and_schema(json_str):
    names = avro_schema.Names()
    schema = make_avsc_object(json.loads(json_str), names)
    return names, schema


_SCHEMA_JSON_STR = __read_file(os.path.join(os.path.dirname(__file__), "schema.avsc"))


__NAMES, _SCHEMA = __get_names_and_schema(_SCHEMA_JSON_STR)
__SCHEMAS: Dict[str, RecordSchema] = {}


def get_schema_type(fullname: str) -> RecordSchema:
    return __SCHEMAS[fullname]
    
    
__SCHEMAS = dict((n.fullname.lstrip("."), n) for n in six.itervalues(__NAMES.names))

class NYTimesApiTopStoriesDocumentClass(DictWrapper):
    # No docs available.
    
    RECORD_SCHEMA = get_schema_type("data_ingest.NYTimesApiTopStoriesDocument")
    def __init__(self,
        section: str,
        title: str,
        url: str,
        byline: str,
        item_type: str,
        updated_date: str,
        created_date: str,
        published_date: str,
        material_type_facet: str,
        kicker: str,
        des_facet: List[str],
        org_facet: List[str],
        per_facet: List[str],
        geo_facet: List[str],
        multimedia: List[Dict[str, str]],
        subsection: Union[None, str]=None,
        abstract: Union[None, str]=None,
        uri: Union[None, str]=None,
        short_url: Union[None, str]=None,
    ):
        super().__init__()
        
        self.section = section
        self.subsection = subsection
        self.title = title
        self.abstract = abstract
        self.url = url
        self.uri = uri
        self.byline = byline
        self.item_type = item_type
        self.updated_date = updated_date
        self.created_date = created_date
        self.published_date = published_date
        self.material_type_facet = material_type_facet
        self.kicker = kicker
        self.des_facet = des_facet
        self.org_facet = org_facet
        self.per_facet = per_facet
        self.geo_facet = geo_facet
        self.multimedia = multimedia
        self.short_url = short_url
    
    def _restore_defaults(self) -> None:
        self.section = str()
        self.subsection = None
        self.title = str()
        self.abstract = None
        self.url = str()
        self.uri = None
        self.byline = str()
        self.item_type = str()
        self.updated_date = str()
        self.created_date = str()
        self.published_date = str()
        self.material_type_facet = str()
        self.kicker = str()
        self.des_facet = list()
        self.org_facet = list()
        self.per_facet = list()
        self.geo_facet = list()
        self.multimedia = list()
        self.short_url = None
    
    
    @property
    def section(self) -> str:
        # No docs available.
        return self._inner_dict.get('section')  # type: ignore
    
    @section.setter
    def section(self, value: str) -> None:
        self._inner_dict['section'] = value
    
    
    @property
    def subsection(self) -> Union[None, str]:
        # No docs available.
        return self._inner_dict.get('subsection')  # type: ignore
    
    @subsection.setter
    def subsection(self, value: Union[None, str]) -> None:
        self._inner_dict['subsection'] = value
    
    
    @property
    def title(self) -> str:
        # No docs available.
        return self._inner_dict.get('title')  # type: ignore
    
    @title.setter
    def title(self, value: str) -> None:
        self._inner_dict['title'] = value
    
    
    @property
    def abstract(self) -> Union[None, str]:
        # No docs available.
        return self._inner_dict.get('abstract')  # type: ignore
    
    @abstract.setter
    def abstract(self, value: Union[None, str]) -> None:
        self._inner_dict['abstract'] = value
    
    
    @property
    def url(self) -> str:
        # No docs available.
        return self._inner_dict.get('url')  # type: ignore
    
    @url.setter
    def url(self, value: str) -> None:
        self._inner_dict['url'] = value
    
    
    @property
    def uri(self) -> Union[None, str]:
        # No docs available.
        return self._inner_dict.get('uri')  # type: ignore
    
    @uri.setter
    def uri(self, value: Union[None, str]) -> None:
        self._inner_dict['uri'] = value
    
    
    @property
    def byline(self) -> str:
        # No docs available.
        return self._inner_dict.get('byline')  # type: ignore
    
    @byline.setter
    def byline(self, value: str) -> None:
        self._inner_dict['byline'] = value
    
    
    @property
    def item_type(self) -> str:
        # No docs available.
        return self._inner_dict.get('item_type')  # type: ignore
    
    @item_type.setter
    def item_type(self, value: str) -> None:
        self._inner_dict['item_type'] = value
    
    
    @property
    def updated_date(self) -> str:
        # No docs available.
        return self._inner_dict.get('updated_date')  # type: ignore
    
    @updated_date.setter
    def updated_date(self, value: str) -> None:
        self._inner_dict['updated_date'] = value
    
    
    @property
    def created_date(self) -> str:
        # No docs available.
        return self._inner_dict.get('created_date')  # type: ignore
    
    @created_date.setter
    def created_date(self, value: str) -> None:
        self._inner_dict['created_date'] = value
    
    
    @property
    def published_date(self) -> str:
        # No docs available.
        return self._inner_dict.get('published_date')  # type: ignore
    
    @published_date.setter
    def published_date(self, value: str) -> None:
        self._inner_dict['published_date'] = value
    
    
    @property
    def material_type_facet(self) -> str:
        # No docs available.
        return self._inner_dict.get('material_type_facet')  # type: ignore
    
    @material_type_facet.setter
    def material_type_facet(self, value: str) -> None:
        self._inner_dict['material_type_facet'] = value
    
    
    @property
    def kicker(self) -> str:
        # No docs available.
        return self._inner_dict.get('kicker')  # type: ignore
    
    @kicker.setter
    def kicker(self, value: str) -> None:
        self._inner_dict['kicker'] = value
    
    
    @property
    def des_facet(self) -> List[str]:
        # No docs available.
        return self._inner_dict.get('des_facet')  # type: ignore
    
    @des_facet.setter
    def des_facet(self, value: List[str]) -> None:
        self._inner_dict['des_facet'] = value
    
    
    @property
    def org_facet(self) -> List[str]:
        # No docs available.
        return self._inner_dict.get('org_facet')  # type: ignore
    
    @org_facet.setter
    def org_facet(self, value: List[str]) -> None:
        self._inner_dict['org_facet'] = value
    
    
    @property
    def per_facet(self) -> List[str]:
        # No docs available.
        return self._inner_dict.get('per_facet')  # type: ignore
    
    @per_facet.setter
    def per_facet(self, value: List[str]) -> None:
        self._inner_dict['per_facet'] = value
    
    
    @property
    def geo_facet(self) -> List[str]:
        # No docs available.
        return self._inner_dict.get('geo_facet')  # type: ignore
    
    @geo_facet.setter
    def geo_facet(self, value: List[str]) -> None:
        self._inner_dict['geo_facet'] = value
    
    
    @property
    def multimedia(self) -> List[Dict[str, str]]:
        # No docs available.
        return self._inner_dict.get('multimedia')  # type: ignore
    
    @multimedia.setter
    def multimedia(self, value: List[Dict[str, str]]) -> None:
        self._inner_dict['multimedia'] = value
    
    
    @property
    def short_url(self) -> Union[None, str]:
        # No docs available.
        return self._inner_dict.get('short_url')  # type: ignore
    
    @short_url.setter
    def short_url(self, value: Union[None, str]) -> None:
        self._inner_dict['short_url'] = value
    
    
__SCHEMA_TYPES = {
    'data_ingest.NYTimesApiTopStoriesDocument': NYTimesApiTopStoriesDocumentClass,
    'NYTimesApiTopStoriesDocument': NYTimesApiTopStoriesDocumentClass,
}

_json_converter = avrojson.AvroJsonConverter(use_logical_types=False, schema_types=__SCHEMA_TYPES)

