import './bootstrap';
import Vue from 'vue';
import ChatConversations from './components/ChatConversations.vue';
import ChatForm from './components/ChatForm.vue';
import ChatMessages from './components/ChatMessages.vue';
import ConversationParticipants from './components/ConversationParticipants.vue';

window.Vue = Vue;
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
Vue.component('chat-conversations', ChatConversations);
Vue.component('chat-form', ChatForm);
Vue.component('chat-messages', ChatMessages);
Vue.component('conversation-participants', ConversationParticipants);

const app = new Vue({
    el: '#app'
});
