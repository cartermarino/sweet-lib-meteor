var $Messages = new Mongo.Collection('messages')

if (Meteor.isClient) {
  AllDBMessages = $Messages.find().fetch()
  Session.setDefault('messages', AllDBMessages)

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
      $Messages.insert({text: input_text, createdAt: new Date()})
      AllDBMessages = $Messages.find().fetch()

      // right now, this isn't returning an array, and we need it to
      Session.set('messages', AllDBMessages)
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
