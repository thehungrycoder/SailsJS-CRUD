/**
 * Note
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
    
    title	: {
    	type: 'STRING',
    	maxLength: 100,
    	minLength: 5,
    	required: true
    },


    content	: {
    	type: 'TEXT',
    	minLength: 5,
    	required: true
    },


    position: 'INTEGER',


    is_public	: {
    	type: 'BOOLEAN',
    	defaultsTo: false
    },


    created_at	: 'DATETIME',


    updated_at	: 'DATETIME'
  }

};
