import React from "react"
import Image from "next/image"

import styles from "./profile.module.css"
import profile from "@/public/static/images/me.jpg"
import profileBackground from "@/public/static/images/profile-bg.svg"
import Card from "../card/card"

const Profile = () => (
  <div className="relative h-screen w-screen">
    <div className={styles.background}>
      <Image src={profileBackground} alt="gradient background" className={styles.gradient}/>
    </div>
    <div className="absolute flex max-w-6xl w-full h-full justify-between items-center content-center">
      <Card>
      </Card>
      <div className="flex h-full items-center">
        <div className="flex dark:border-black w-fit h-fit rounded-full drop-shadow-2xl">
          <Image 
            src={profile} 
            alt="picture of me"
            placeholder="blur"
            className="rounded-full max-w-sm drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Profile
