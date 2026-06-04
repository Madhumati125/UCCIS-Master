function buildTimeline(events){

  return events.map((e,index)=>({

    step:index+1,
    action:e.action,
    state:e.state,
    timestamp:e.time

  }));

}

module.exports={ buildTimeline };