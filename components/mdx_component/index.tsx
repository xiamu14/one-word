import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import NextImage from "next/image";
import styles from "./index.module.scss";
import Step from "../step";
import { AnimatePresence, motion } from "framer-motion";

const Pre = ({ children, ...otherProps }: PropsWithChildren<any>) => {
  const textInput = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };
  const handleCopy = useCallback(() => {
    if (textInput.current) {
      setCopied(true);
      navigator.clipboard.writeText(textInput.current.textContent || "");
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, []);
  return (
    <div
      className={styles["pre-box"]}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
    >
      <div ref={textInput}>
        <pre {...otherProps}>{children}</pre>
      </div>
      {hovered && (
        <button
          className={`absolute right-2 top-2 h-8 w-8 rounded bg-transparent p-1 
          }`}
          onClick={handleCopy}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className={"text-gray-400"}
          >
            {copied ? (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </>
            ) : (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </>
            )}
          </svg>
        </button>
      )}
    </div>
  );
};

interface ImageProps {
  src: string;
  width: number;
  height: number;
  border?: boolean | string;
  alt?: string;
  scale?: string;
}

export function Image(props: ImageProps) {
  const { src, border = false, alt = "illustration", scale = "0.98" } = props;
  const boxRef = useRef<HTMLDivElement>(null);
  const [renderSize, setRenderSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (boxRef.current) {
      const originalWidth = props.width;
      const originalHeight = props.height;
      const width = Math.floor(boxRef.current.clientWidth * parseFloat(scale));
      const height = Math.floor(
        (width * (originalHeight as number)) / (originalWidth as number)
      );

      setRenderSize({ width, height });
    }
  }, [props, scale]);

  return (
    <div
      ref={boxRef}
      style={{
        width: "98%",
        display: "flex",
        margin: "10px 4px 30px",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        // borderRadius: border ? "4px" : "0",
        border: border ? "1px solid #d6dde4" : "none",
      }}
    >
      <NextImage src={src} alt={alt} {...renderSize} />
    </div>
  );
}

const Nav = ({ children }: PropsWithChildren<{}>) => {
  const [showNav, setShowNav] = useState(false);
  // console.log(
  //   "%c debug",
  //   "background: #69c0ff; color: white; padding: 4px",
  //   children
  // );

  const abstractList = useMemo(() => {
    const list: number[] = [];
    // @ts-ignore
    const count = children?.props?.children?.length ?? 0;
    for (let i = 0; i < Math.min(count, 6) - 1; i += 1) {
      list.push(i);
    }
    // console.log(
    //   "%c debug",
    //   "background: #69c0ff; color: white; padding: 4px",
    //   count,
    //   list
    // );

    return list;
  }, [children]);

  if (abstractList.length === 0) {
    return null;
  }

  return (
    <div className={styles["toc"]}>
      <AnimatePresence>
        {!showNav ? (
          <motion.div
            initial={{ opacity: 0, transform: "translateX(20px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring" }}
          >
            <nav onMouseEnter={() => setShowNav(() => true)}>
              <ul className={styles["toc-abstract-entries"]}>
                <li
                  className={`${styles["toc-entry"]} ${styles["toc-title"]}`}
                ></li>
                {abstractList.map((item) => {
                  return <li key={item} className={styles["toc-entry"]}></li>;
                })}
              </ul>
            </nav>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring" }}
          >
            <nav
              className={styles["toc-nav"]}
              onMouseLeave={() => setShowNav(() => false)}
            >
              {children}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const mdxCustomComponents = {
  pre: Pre,
  nav: Nav,
  Image: Image,
  Step: Step,
};

export default mdxCustomComponents;
