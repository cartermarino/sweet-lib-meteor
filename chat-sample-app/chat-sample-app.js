if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('message', '')
  Session.setDefault('messages', [])

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      alert("clicked!")
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.chat_window.helpers({
    message: function(){
      return Session.get('messages');
    }
  });
  Template.input_box.events({
    submit: function() {
      input_text = $("#write-chat").val()
      Session.set('message', input_text)
      Session.set('messages', Session.get('message'))


      //alert("WHOAH HEY")
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
