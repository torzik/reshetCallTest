import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use( Vuex )

export default new Vuex.Store( {
  state: {
    contacts: [],
    contact: null
  },
  mutations: {
    setContacts( state, payload ) {
      state.contacts = payload.data.all
    },
    setContact( state, payload ) {
      state.contact = payload.data
    }
  },
  actions: {
    getContacts( context ) {
      axios.get( 'http://localhost:3000/api/contact' ).then( contacts => {
        context.commit( 'setContacts', contacts )
        return true
      } )
    },
    getContactById( context, id ) {
      axios.get( `http://localhost:3000/api/contact/${id}` ).then( contact => {
        context.commit( 'setContact', contact )
      } )
    },
    deleteContact( context, id ) {
      axios
        .delete( `http://localhost:3000/api/contact/delete/${id}` )
        .then( () => {
          context.dispatch( 'getContacts' )
          return true
        } )
    },
    addContact( context, payload ) {
      axios( {
        method: 'post',
        url: 'http://localhost:3000/api/contact/create',
        data: payload
      } ).then( () => {
        context.dispatch( 'getContacts' )
        return true
      } )
    },
    editContact ( context, payload ) {
      const {_id} = context.state.contact
      axios( {
        method: 'put',
        url: `http://localhost:3000/api/contact/edit/${_id}`,
        data: payload
      } ).then( () => {
        context.dispatch( 'getContacts' )
        return true
      } )
    }

  },
  getters: {
    contact( state ) {
      return state.contact
    },
    contacts( state ) {
      return state.contacts
    }
  },
  modules: {}
} )