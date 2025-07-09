import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  payloadKeyFromModelName(modelName) {
    if (modelName === 'user') {
      return 'users';
    }
    return super.payloadKeyFromModelName(modelName);
  }
}
