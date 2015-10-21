if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('messages', [])

  Template.chat_window.helpers({
    messages: function() {
      return Session.get('messages')
    }
  });

  Template.chat_window.events({
    submit: function() {
      event.preventDefault()
      input_text = $("#write-chat").val()
      Session.set('message', input_text)

      new_arr = Session.get('messages')
      new_arr.push({text: input_text})
      Session.set('messages', new_arr)
      $('#write-chat').val('')
    }
  });

}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

// Trying to set up database... not sure if works yet!

// Chat = new Mongo.Collection("chat");
// if (Meteor.isClient){
//   Template.body.helpers({
//     chat: function(){
//       return Chat.find({});
//     }
//   });
//   Template.body.events({
//     "submit .new-chat": function (event){
//       event.preventDefault();
//       var text = event.target.text.value;
//       Chat.insert({
//         text: text,
//         createdAt: new Date()
//       });
//       event.target.text.value = "";
//     }
//   })
// }
