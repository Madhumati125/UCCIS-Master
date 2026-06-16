import {
  useEffect,
  useState
} from "react";

import {
  getRuntimeSummary,
  getTraceIds,
  getHealth,
  getReplayData
} from "../services/runtimeService";

function useRuntimeData() {

  const [summary, setSummary] =
    useState(null);

  const [signals, setSignals] =
    useState([]);

  const [health, setHealth] =
    useState(null);

  const [replay, setReplay] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const loadData =
    async () => {

      try {

        const summaryData =
          await getRuntimeSummary();

        const signalData =
          await getTraceIds();

        const healthData =
          await getHealth();

        const replayData =
          await getReplayData();

        setSummary(
          summaryData.summary
        );

        setSignals(
          signalData.data || []
        );

        setHealth(
          healthData
        );

        setReplay(
          replayData.data || []
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

  useEffect(() => {

    loadData();

    const timer =
      setInterval(
        loadData,
        10000
      );

    return () =>
      clearInterval(timer);

  }, []);

  return {
    summary,
    signals,
    replay,
    health,
    loading
  };
}

export default useRuntimeData;