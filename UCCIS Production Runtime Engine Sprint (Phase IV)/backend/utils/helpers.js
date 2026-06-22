exports.formatDate =
  date => {
    return new Date(
      date
    ).toLocaleString();
  };

exports.calculateLatency =
  (start, end) => {
    return (
      new Date(end) -
      new Date(start)
    );
  };

exports.generateKPI =
  value => {
    if (value > 90)
      return "Excellent";

    if (value > 70)
      return "Good";

    if (value > 50)
      return "Average";

    return "Poor";
  };

exports.randomNumber =
  (min, max) => {
    return (
      Math.floor(
        Math.random() *
          (max - min + 1)
      ) + min
    );
  };