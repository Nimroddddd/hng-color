import { motion } from "framer-motion"
import { useState } from "react"

export default function AnswerMessage(props) {

  return (
      <div className="flex flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: props.visible ? 1 : 0 }}
          transition={{ duration: 0.5 }} // Animation duration
          className="text-2xl font-bold text-orange-200"
        >
          {props.message}
        </motion.p>
      </div>
  )
}