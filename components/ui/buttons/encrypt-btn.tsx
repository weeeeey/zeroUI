'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const buttonVariants = {
    hover: {
        scale: 1.03,
        color: 'rgb(125,211,252)',
    },
};
const lineVariants = {
    hover: {
        translateY: ['3rem', '-3rem', '3rem'], // 먼저 아래에서 위로, 그 다음 위에서 아래로
        transition: {
            translateY: {
                duration: 2, // 전체 애니메이션 지속 시간 조정
                times: [0, 0.5, 1], // 애니메이션의 각 단계에 해당하는 시간 비율 설정
                repeat: Infinity, // 무한 반복
            },
        },
    },
};
const TEXT = 'encrypt lock';
const CYCLES_PER_LETTER = 2;

const CHARTS = '!@#$%^&*():{};|,.<>/?';

export const EncryptBtn = () => {
    const [text, setText] = useState(TEXT);
    const intervalRef = useRef<NodeJS.Timeout>();

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = TEXT.split('')
                .map((char, idx) => {
                    if (pos / CYCLES_PER_LETTER > idx) {
                        return char;
                    }
                    const randomCharIndex = Math.floor(
                        Math.random() * CHARTS.length
                    );
                    const randomChar = CHARTS[randomCharIndex];
                    return randomChar;
                })
                .join('');
            setText(scrambled);
            pos++;
        }, 80);
        if (pos >= TEXT.length * CYCLES_PER_LETTER) {
            stopScramble();
        }
    };
    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setText(TEXT);
    };

    return (
        <motion.button
            whileHover="hover"
            variants={buttonVariants}
            whileTap={{ scale: 0.97 }}
            onHoverStart={scramble}
            onHoverEnd={stopScramble}
            className="bg-white/50 w-52 border text-white border-white uppercase  text-lg font-semibold py-2 pl-4 pr-1 rounded-lg flex justify-center items-center relative overflow-hidden"
        >
            <Lock className="absolute top-1/2 left-2 -translate-y-1/2 " />
            {text}
            <motion.div
                initial={{ translateY: '-3rem' }}
                variants={lineVariants}
                className="absolute  left-0 w-60 h-2 bg-red-400"
            />
        </motion.button>
    );
};

/**
 * const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };
 */
