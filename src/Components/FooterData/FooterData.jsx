import React, { useEffect, useRef, useState } from "react";
import styles from "./FooterData.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "primereact/button";
import { FaPaintBrush } from "react-icons/fa";
import StylesModal from "../StylesModal/StylesModal";

const FooterData = ({
  selectedFooterPoints,
  setSelectedFooterPoints,
  isTemplateEditable,
}) => {
  const [styleProps, setStyleProps] = useState({
    backgroundColor: "#fff",
    padding: "10",
    borderRadius: "4",
    borderType: "border",
    borderWidth: "1",
    borderStyle: "solid",
    borderColor: "000",
    justifyContent: "flexStart",
    gap: "5",
    labelFont: {
      labelfontStyle: "normal",
      labelfontSize: 16,
      labelfontWeight: 600,
      labelfontcolor: "#000",
    },
    dataFont: {
      fontStyle: "normal",
      fontSize: 14,
      fontWeight: 500,
      fontcolor: "#000",
    },
  });

  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.style.backgroundColor = `#${styleProps.backgroundColor}`;
      footerRef.current.style.padding = `${styleProps.padding}px`;
      footerRef.current.style.borderRadius = `${styleProps.borderRadius}px`;
      footerRef.current.style.border = `${styleProps.borderWidth} ${styleProps.borderStyle} #${styleProps.borderColor}`;
      footerRef.current.style.justifyContent = styleProps.justifyContent;
      footerRef.current.children[0].style.gap = `${styleProps.gap}px`;

      // console.log(footerRef.current.firstChild);

      for (
        let index = 0;
        index < footerRef.current.firstChild.children.length;
        index++
      ) {
        footerRef.current.firstChild.children[
          index
        ].children[0].style.color = `#${styleProps.labelFont.labelfontcolor}`;
        footerRef.current.firstChild.children[
          index
        ].children[0].style.fontSize = `${styleProps.labelFont.labelfontSize}px`;
        footerRef.current.firstChild.children[
          index
        ].children[0].style.fontStyle = styleProps.labelFont.labelfontStyle;
        footerRef.current.firstChild.children[
          index
        ].children[0].style.fontWeight = styleProps.labelFont.labelfontWeight;

        footerRef.current.firstChild.children[
          index
        ].children[1].style.color = `#${styleProps.dataFont.fontcolor}`;
        footerRef.current.firstChild.children[
          index
        ].children[1].style.fontSize = `${styleProps.dataFont.fontSize}px`;
        footerRef.current.firstChild.children[
          index
        ].children[1].style.fontStyle = styleProps.dataFont.fontStyle;
        footerRef.current.firstChild.children[
          index
        ].children[1].style.fontWeight = styleProps.dataFont.fontWeight;
      }
    }
  }, [styleProps]);

  const footerRef = useRef(null);

  const [visible, setVisible] = useState(false);

  return (
    <>
      <StylesModal
        setVisible={setVisible}
        visible={visible}
        stylesProps={styleProps}
        setStylesProps={setStyleProps}
      />
      <div className={styles.wrapper}>
        <AnimatePresence mode="sync">
          {isTemplateEditable && (
            <motion.div
              layout
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 0.2,
              }}
              className={styles.editButton}
            >
              <AnimatePresence mode="sync">
                <Button
                  className={styles.editButton}
                  label="Customize"
                  onClick={() => setVisible(true)}
                >
                  <FaPaintBrush />
                </Button>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {selectedFooterPoints.length > 0 && (
          <div className={styles.containerRef} ref={footerRef}>
            <div className={styles.container}>
              <AnimatePresence mode="sync">
                {selectedFooterPoints.map((item, index) => (
                  <motion.div layout key={index}>
                    <span>{item.name}</span>
                    <span>{item.val}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FooterData;
