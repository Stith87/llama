var llamas = require('../models/llamas.js');

module.exports = [
	{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
    	reply.view('index', {llamas: llamas});
    }
  },
  {
    method: 'GET',
    path: '/assets/{param*}',
    handler:  {
        directory: {
            path: 'assets'
        }
    }
	},
	{
    method: 'GET',
    path: '/llama/{id}',
    handler: (request, reply) => {

    	function findId(llama){
    		return llama.id == request.params.id;
    	}

    	function filterId(llama){
    		return llama.id != request.params.id;
    	}
    	var llama = llamas.find(findId);
    	var others = llamas.filter(filterId);
    	reply.view('profile', {llama: llama, llamas: others});
    }
  }
]