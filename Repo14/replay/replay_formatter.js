function replayFormatter(timeline){

  return timeline.map(item=>({

    label:`${item.step} - ${item.action}`,
    status:item.state

  }));

}

module.exports={ replayFormatter };