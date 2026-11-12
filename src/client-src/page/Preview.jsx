/*
 * File: Preview.jsx
 * Project: discord-rpc
 * File Created: Tuesday, 7th February 2023 11:30:36 am
 * Author: Tee (tee@stainless.love)
 * Github: https://github.com/teeteeteeteetee
 * Discord: Tee#0001
 * 
 * Last Modified: Saturday, 25th November 2023 2:49:42 pm
 * Modified By: Tee (tee@stainless.love)
 * 
 * Copyright (c) 2023 Tee, Stainless Love
 */

import React, { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import Banner from "../components/Banner";
import { dispatchEvent } from "..";
import Icons from "../components/Icons";

export default function Preview() {

    const [activity, setActivity] = useState({})
    const [user, setUser] = useState({
        username: "User",
        discriminator: "0000",
    })
    useEffect(() => {
        dispatchEvent("com.tee.rpc.update", {})
        window.csInterface.addEventListener("com.tee.rpc.activity", (e) => {
            setActivity(e.data)
            console.log(e.data)
        })
        window.csInterface.addEventListener("com.tee.rpc.user", (e) => {
            setUser(e.data)
            console.log(e.data)
        })

    }, [])

    return (
        <div className="w-full rounded-xl overflow-hidden pt-3 px-3 min-h-0 flex-1 flex items-center justify-center">
            <div className="flex flex-col self-center bg-black rounded-2xl w-full max-w-[280px] shadow-2xl shadow-red-900/50 border border-red-900/30">
                <div className="flex flex-col -space-y-12">
                    <Banner className={"self-start rounded-t-2xl"} />
                    <div className="pl-3">
                        <Avatar />
                    </div>
                </div>
                <div className="w-full pt-6 px-4">
                    <div className="flex flex-col divide-y divide-tertiary gap-1 bg-black">
                        <p className="text-white font-medium text-sm">{user.username}{user.discriminator != 0 && <span className="text-gray-300">{`#${user.discriminator}`}</span>}</p>
                        <p className="text-white font-medium tracking-tighter text-xs">TRABALHANDO EM:</p>
                    </div>
                    <div className="flex gap-2 pt-2 pb-5">
                        <Icons className="rounded-xl w-[50px] h-[50px] shadow-lg" version={1}/>
                        {/* <img className="rounded-sm w-[60px] h-[60px]" src="../../assets/AEFT.png" /> */}
                        <div className="flex flex-col text-white text-[10px] font-azeri_regular justify-center">
                            {activity.name != "" && <p className="font-azeri_bold">{activity.name}</p>}
                            {activity.details != "" && <p>{activity.details}</p>}
                            {
                                activity.state != "" &&
                                <p>{activity.state}
                                        {(activity.partySize != "" && activity.partyMax != "") && <span>{` (${activity.partySize} de ${activity.partyMax})`}</span>}
                                    </p>
                                }
                                <p>04:02:20 decorrido</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
