/*
 * File: localstorage.js
 * Project: discord-rpc-client
 * File Created: Sunday, 12th February 2023 9:36:50 pm
 * Author: Tee (tee@stainless.love)
 * Github: https://github.com/teeteeteeteetee
 * Discord: Tee#0001
 * 
 * Last Modified: Sunday, 7th April 2024 11:52:17 am
 * Modified By: Tee (tee@stainless.love)
 * 
 * Copyright (c) 2023 Tee, Stainless Love
 */

const csInterface = new CSInterface();

export const rpcConfigurationTemplate = {
    enabled: {
        enabled: true,
        description: "",
        name: "Ativar Rich Presence",
        type: "checkbox",
        hidden: false
    },
    details: {
        enabled: true,
        description: "",
        name: "Detalhes",
        type: "checkbox",
        hidden: false
    },
    state: {
        enabled: true,
        description: "",
        name: "Estado",
        type: "checkbox",
        hidden: false
    },
    timestamp: {
        enabled: true,
        description: "",
        name: "Timestamp",
        type: "checkbox",
        hidden: false
    },
    largeImageKey: {
        enabled: true,
        value: "logo2",
        description: "",
        name: "Ícone Grande",
        type: "dropdown",
        hidden: false
    },
    largeImageText: {
        enabled: true,
        description: "",
        name: "Texto do Ícone Grande",
        type: "checkbox",
        hidden: false
    },
    smallImageKey: {
        enabled: true,
        description: "",
        name: "Ícone Pequeno",
        type: "checkbox",
        hidden: false
    },
    smallImageText: {
        enabled: true,
        description: "",
        name: "Texto do Ícone Pequeno",
        type: "checkbox",
        hidden: false
    },
    partySize: {
        enabled: true,
        description: "",
        name: "Tamanho do Grupo",
        type: "checkbox",
        hidden: true
    },
    partyMax: {
        enabled: true,
        description: "",
        name: "Máximo do Grupo",
        type: "checkbox",
        hidden: true
    }
}

export const extensionConfigurationTemplate = {
    updateNotification: {
        enabled: true,
        description: "",
        name: "Notificação de Atualização",
        type: "checkbox",
        hidden: false
    },
    catMode: {
        enabled: false,
        description: "",
        name: "Modo Gato",
        type: "checkbox",
        hidden: false
    },
}

export function setConfiguration(name, configuration){
    window.localStorage.setItem(name, JSON.stringify(configuration));
    csInterface.dispatchEvent('com.tee.panel.settings')
}

export function getConfiguration(name){
    return JSON.parse(window.localStorage.getItem(name))
}

export function getConfigurations(){
    const conf = {}
    Object.keys(window.localStorage).forEach(key => {
        conf[key] = getConfiguration(key)
    })
    
    return conf
}

export function compare(obj, prop) {
    return JSON.stringify(obj) === JSON.stringify(prop) ?  true : false;
};

export function resetConfiguration(){
    window.localStorage.clear()
    location.reload()
}