import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

// Contact
export const Contact = () => {
  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          {/* Title */}
          <p className={styles.sectionSubText}>Hubungi saya</p>
          <h3 className={styles.sectionHeadText}>Kontak.</h3>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col gap-8">
            {/* Phone */}
            <div className="flex flex-col">
              <span className="text-white font-medium mb-4">No Telepon</span>
              <p className="bg-tertiary py-4 px-6 text-white rounded-lg font-medium">
                +62 895-3298-90324
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <span className="text-white font-medium mb-4">Email</span>
              <p className="bg-tertiary py-4 px-6 text-white rounded-lg font-medium break-all">
                fikriade257@gmail.com
              </p>
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <span className="text-white font-medium mb-4">Alamat</span>
              <p className="bg-tertiary py-4 px-6 text-white rounded-lg font-medium">
                Jl. Kawali - Panjalu , Kp.Pakuwon Ds.Nyalindung , Kec.Lumbung
              </p>
            </div>
          </div>
        </motion.div>

        {/* Earth Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
