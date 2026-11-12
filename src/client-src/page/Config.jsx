/*
 * File: Config.jsx
 * Project: discord-rpc
 * File Created: Tuesday, 7th February 2023 11:30:23 am
 * Author: Tee (tee@stainless.love)
 * Github: https://github.com/teeteeteeteetee
 * Discord: Tee#0001
 * 
 * Last Modified: Saturday, 25th November 2023 6:09:15 pm
 * Modified By: Tee (tee@stainless.love)
 * 
 * Copyright (c) 2023 Tee, Stainless Love
 */

import React, {useEffect, useState} from 'react';
import ConfigItem from '../components/ConfigItem'
import { dispatchEvent } from '..';
import { extensionConfigurationTemplate, getConfigurations, resetConfiguration, rpcConfigurationTemplate, setConfiguration } from "../../rpc_client-src/localstorage"
function ResetConfig(){
    dispatchEvent("com.tee.rpc.reset", {})
    window.location.reload()
    resetConfiguration()
}
function SaveConfig(config, setShowNotification){
    dispatchEvent("com.tee.rpc.config", config)
    for (const [key, value] of Object.entries(config)){
        console.log(key)
        setConfiguration(key, value)
    }
    // window.location.reload()
    console.log(config)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
}
export default function Config() {

    const [config, setConfig] = useState({})
    const [showNotification, setShowNotification] = useState(false)

    useEffect(() => {
        setConfig(getConfigurations())
    }, [])

    return (
        <div className='w-full relative px-2'>
            {showNotification && (
                <div className="fixed top-4 right-4 bg-green-600 text-white px-3 py-1.5 rounded-lg shadow-lg animate-pulse z-50 text-xs">
                    Configuração salva com sucesso!
                </div>
            )}
            <div className='flex flex-col gap-3'>
                <ConfigItem group="rpc" config={config} setConfig={setConfig} title="Configuração do Rich Presence" template={rpcConfigurationTemplate} />
                <ConfigItem group="extension" config={config} setConfig={setConfig} title="Configuração da Extensão" template={extensionConfigurationTemplate} />

                <div className='flex flex-row gap-2 self-center mt-2'>
                    <button onClick={() => SaveConfig(config, setShowNotification)} className='bg-button p-2 text-xs text-white rounded-xl shadow-lg hover:opacity-90 transition-opacity'>Salvar Configuração</button>
                    <button onClick={() => ResetConfig()} className='bg-transparent border border-error p-2 text-xs text-white rounded-xl shadow-lg hover:bg-error/20 transition-colors'>Restaurar Padrão</button>
                </div>
            </div>
        </div>

    )
}