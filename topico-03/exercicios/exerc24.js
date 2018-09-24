
/*

Crie um objeto chamado facebookProfile. O objeto deve ter três propriedades:

var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

seu nome (name)
o número de amigos (friends) que você tem e
uma array de mensagens (messages) que você postou (como strings)
O objeto deve também possuir quatro métodos:

postMessage(message) - adiciona uma nova mensagem em formato de string na array
deleteMessage(index) - remove a mensagem correspondente ao índice fornecido
addFriend() - aumenta a contagem de amigos em 1
removeFriend() - diminui a contagem de amigos em 1*/

var facebookProfile = {
	name: "Murilo",
	friends: 5,
	messages: ["Hello", "Ola Goiania", "Tchau!"],
	postMessage: function addMsg(msg){
		facebookProfile.messages.push(msg);
	},
	deleteMessage: function deleteMsg(index){
		facebookProfile.messages.splice(index, 1);
	},
	addFriend: function addNovoAmigo(){
		facebookProfile.friends += 1;
	},
	removeFriend: function removeNovoAmigo(){
		facebookProfile.friends -= 1;
	}
	
};

console.log(facebookProfile);



facebookProfile.postMessage("Ola Mundo");
console.log(facebookProfile.messages);


facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);



facebookProfile.addFriend();
console.log(facebookProfile.friends);


facebookProfile.removeFriend();
console.log(facebookProfile.friends);


