/*
 * DO NOT EDIT THIS FILE, it is auto-generated. It will be updated automatically.
 * All changes done to this file will be lost upon re-running the 'silence createapi' command.
 * If you want to create new API methods, define them in a new file.
 *
 * Silence is built and maintained by the DEAL research group at the University of Seville.
 * You can find us at https://deal.us.es
 */

"use strict";

import { BASE_URL, requestOptions } from './common.js';

const aficiones_usuariosAPI_auto = {

    /**
    * Gets all aficiones_usuarios
    */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/aficiones_usuarios`,requestOptions);
        return response.data;
    },

    /**
    * Gets an entry from 'aficiones_usuarios' by its primary key
    */
    getById: async function(aficionesUsuarioID) {
        let response = await axios.get(`${BASE_URL}/aficiones_usuarios/${aficionesUsuarioID}`,requestOptions);
        return response.data[0];
    },

    /**
    * Creates a new entry in 'aficiones_usuarios'
    */
    create: async function(formData, ) {
        let response = await axios.post(`${BASE_URL}/aficiones_usuarios`,formData, requestOptions);
        return response.data;
    },

    /**
    * Updates an existing entry in 'aficiones_usuarios' by its primary key
    */
    update: async function(formData, aficionesUsuarioID) {
        let response = await axios.put(`${BASE_URL}/aficiones_usuarios/${aficionesUsuarioID}`,formData, requestOptions);
        return response.data;
    },

    /**
    * Deletes an existing entry in 'aficiones_usuarios' by its primary key
    */
    delete: async function(aficionesUsuarioID) {
        let response = await axios.delete(`${BASE_URL}/aficiones_usuarios/${aficionesUsuarioID}`,requestOptions);
        return response.data;
    },
};

export {aficiones_usuariosAPI_auto};