/*
 * File: Navigator.jsx
 * Project: discord-rpc
 * File Created: Monday, 6th February 2023 9:35:09 pm
 * Author: Tee (tee@stainless.love)
 * Github: https://github.com/teeteeteeteetee
 * Discord: Tee#0001
 * 
 * Last Modified: Saturday, 25th November 2023 4:18:43 pm
 * Modified By: Tee (tee@stainless.love)
 * 
 * Copyright (c) 2023 Tee, Stainless Love
 */
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { FaDiscord, FaCog, FaGithub } from 'react-icons/fa'
import { VscDebugConsole } from 'react-icons/vsc'
import property from "../../../package.json"
export default function Navigator({setState}) {

    const [update, setUpdate] = useState(false)

    useEffect(() => {
        fetch("https://api.github.com/repos/AtaliasOliveira1/-ataliasloami-Adobe-discord-rpc/releases/latest")
        .then(response => response.json())
        .then(latest => {
            if(latest["tag_name"] != property.version){
                setUpdate(true)
            }
        })
    }, [])

    return (
        <nav className="flex items-center justify-between flex-wrap bg-secondary p-4 rounded-b-2xl shadow-lg">
            <div className="w-full flex items-center divide-x hover:bg-blend-lighten">
                <NavItem onClick={() => setState("Preview")} href={"#"} text={"Visualizar"} icon={<FaDiscord className="text-gray-200 m-auto text-lg" />} />
                <NavItem onClick={() => setState("Config")} href={"#"} text={"Configuração"} icon={<FaCog className="text-gray-200 m-auto text-lg" />} />
                <NavItem onClick={() => setState("Debug")} href={"#"} text={"Debug"} icon={<VscDebugConsole className="text-gray-200 m-auto text-lg" />} />
                <NavItem update={update} onClick={() => setState("Repository")} href={"#"} text={"Repositório"} icon={<FaGithub className="text-gray-200 m-auto text-lg" />} />
            </div>
        </nav>
    );
}
