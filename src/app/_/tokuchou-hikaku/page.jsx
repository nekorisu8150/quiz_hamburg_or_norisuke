"use client";
import React from "react";

function MainComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);

  const characteristics = [
    { text: "美味しい", answer: "ハンバーグ" },
    { text: "ジューシー", answer: "ハンバーグ" },
    { text: "手間がかかる", answer: "ハンバーグ" },
    { text: "万人に愛される", answer: "ハンバーグ" },
    { text: "さとこに愛されている", answer: "ハンバーグ" },
    { text: "毎日食べられる", answer: "ハンバーグ" },
    { text: "子どもから大人まで人気がある", answer: "ハンバーグ" },
    { text: "さとこの得意料理", answer: "ハンバーグ" },
    { text: "ごはんにもパンにも合う", answer: "ハンバーグ" },
    { text: "ソイラテを買ってくれない", answer: "のりすけ" },
    { text: "よくさとこが食べている", answer: "ハンバーグ" },
    { text: "硬いと美味しくない", answer: "ハンバーグ" },
    { text: "冷めても美味しい", answer: "ハンバーグ" },
    { text: "エアガンが好きではない", answer: "のりすけ" },
  ];

  const handleAnswer = (selectedAnswer) => {
    const correct = selectedAnswer === characteristics[currentIndex].answer;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
    setShowNextButton(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 < characteristics.length) {
      setCurrentIndex(currentIndex + 1);
      setIsCorrect(null);
      setShowNextButton(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setIsCorrect(null);
    setShowNextButton(false);
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        {!showResult ? (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4 font-noto-sans">
                この特徴はどっち？
              </h1>
              <p className="text-xl mb-8 font-noto-sans">
                {characteristics[currentIndex].text}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleAnswer("ハンバーグ")}
                className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white py-3 px-6 rounded-lg font-bold font-noto-sans transition-colors"
                disabled={showNextButton}
              >
                ハンバーグ
              </button>
              <button
                onClick={() => handleAnswer("のりすけ")}
                className="bg-[#4ecdc4] hover:bg-[#45b7af] text-white py-3 px-6 rounded-lg font-bold font-noto-sans transition-colors"
                disabled={showNextButton}
              >
                のりすけ
              </button>
            </div>

            {isCorrect !== null && (
              <div
                className={`text-center text-xl font-bold ${
                  isCorrect ? "text-green-500" : "text-red-500"
                } font-noto-sans`}
              >
                {isCorrect ? "正解！" : "不正解..."}
              </div>
            )}

            {showNextButton && (
              <div className="text-center">
                <button
                  onClick={handleNext}
                  className="bg-[#45b7af] hover:bg-[#3da099] text-white py-3 px-6 rounded-lg font-bold font-noto-sans transition-colors"
                >
                  次の問題へ
                </button>
              </div>
            )}

            <div className="text-center mt-4">
              <p className="font-noto-sans">
                スコア: {score} / {characteristics.length}
              </p>
              <p className="font-noto-sans">
                問題: {currentIndex + 1} / {characteristics.length}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold font-noto-sans">クイズ終了！</h2>
            <p className="text-xl font-noto-sans">
              最終スコア: {score} / {characteristics.length}
            </p>
            <button
              onClick={resetQuiz}
              className="bg-[#45b7af] hover:bg-[#3da099] text-white py-3 px-6 rounded-lg font-bold font-noto-sans transition-colors"
            >
              もう一度プレイ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainComponent;