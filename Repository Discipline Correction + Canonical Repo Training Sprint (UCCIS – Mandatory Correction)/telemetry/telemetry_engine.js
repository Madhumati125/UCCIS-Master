const generateSignal = () => {
  return {
    signalId: "T" + Math.floor(Math.random() * 100),
    type: "CPU",
    value: Math.floor(Math.random() * 100),
    status: "OK"
  };
};

setInterval(() => {
  console.log("📡 Signal:", generateSignal());
}, 2000);