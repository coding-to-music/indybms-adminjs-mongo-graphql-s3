const {
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat,
  } = require('graphql');
  
  
  const EventInputType = (type) => {
    let allGraphFields = {};
    const standardGraphFields = {
      title: {
        type: GraphQLString,
      },
      description: {
        type: GraphQLString,
      },
    };
  
    switch (type) {
      case 'create':
        allGraphFields = {
          ...standardGraphFields,
          password: {
            type: GraphQLString,
          },
        };
        break;
      case 'update':
        allGraphFields = {
          ...standardGraphFields,
          privilege: {
            type: GraphQLString,
          }
        };
        break;
      default:
        allGraphFields = {
          ...standardGraphFields,
        };
    }
  
    const userInputType = new GraphQLInputObjectType({
      name: `UserInputType${type[0].toUpperCase() + type.slice(1, type.length - 1)}`,
      description: 'This represents a UserInputType',
      fields: allGraphFields,
    });
  
    return userInputType;
  };
  
  module.exports = { UserInputType };