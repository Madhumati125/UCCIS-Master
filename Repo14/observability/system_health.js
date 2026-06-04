function systemHealth(){

  return {

    cpu:"NORMAL",
    memory:"STABLE",
    replay:"SYNCED",
    anomalies:0

  };

}

module.exports={ systemHealth };