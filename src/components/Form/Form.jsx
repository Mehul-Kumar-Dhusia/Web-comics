import React, { useState } from "react";
import styles from "./Form.module.css";
import { Panel, PrimaryButton, SecondaryButton, TextArea } from "..";
import { generator } from "@/handler/form";
import { ThreeDots } from "react-loader-spinner";

const Initial_Prompts = ["", "", "", "", "", "", "", "", "", ""];

const Form = () => {
  const [prompts, setPrompts] = useState(Initial_Prompts);

  const [showPanel, setShowPanel] = useState(false);

  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleChange = (i, value) => {
    const updatedPrompts = [...prompts];
    updatedPrompts[i] = value;
    setPrompts([...updatedPrompts]);
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setShowPanel(true);
      const res = await generator(prompts);
      setImages(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setShowPanel(false);
    }
  };

  return (
    <>
      {!showPanel && !loading && (
        <div className={styles.container}>
          <h2>Dashtoon Comic Strips</h2>

          <div style={{ display: "flex", gap: "50px" }}>
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {prompts.map((prompt, index) => {
                return (
                  <TextArea
                    label={`Comic Strip ${index + 1}`}
                    value={prompt}
                    onChange={(e) => {
                      handleChange(index, e.target.value);
                    }}
                  />
                );
              })}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: "30px",
              }}
            >
              <PrimaryButton
                title="Generate Comic Strips"
                onClick={handleGenerate}
              />
              <SecondaryButton
                title="Clear Strips"
                onClick={() => {
                  setPrompts(Initial_Prompts);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className={styles.loader}>
          <ThreeDots color="#FFFFFF" />
        </div>
      )}

      {showPanel && !loading && (
        <div className={styles.container}>
          <div
            style={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}
          >
            <Panel images={images} />
            <PrimaryButton
              title="Clear Strip"
              onClick={() => {
                setShowPanel(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
