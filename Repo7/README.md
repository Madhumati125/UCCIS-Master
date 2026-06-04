# Temporal-Urban-Intelligence-Governance-Simulation-Full-TANTRA-Convergence-System

<img width="1600" height="735" alt="WhatsApp Image 2026-05-07 at 12 50 04 PM" src="https://github.com/user-attachments/assets/b726b020-a8a0-4a1b-9d8d-1c79a886ceba" />



<img width="1600" height="489" alt="WhatsApp Image 2026-05-07 at 12 50 04 PM (1)" src="https://github.com/user-attachments/assets/513c66f5-694c-43e3-951a-e260429a3ed5" />



<img width="1022" height="450" alt="image" src="https://github.com/user-attachments/assets/5ab3e6ca-1884-43bf-9e19-c5bb2391b1c6" />




<img width="1600" height="449" alt="WhatsApp Image 2026-05-07 at 12 50 04 PM (2)" src="https://github.com/user-attachments/assets/91931531-1d1f-428c-87a8-19d798cf4b61" />





Intelligence Output
{
  "success": true,
  "convergence": {
    "tantra_convergence": true,
    "trace_continuity": "TRACE-1778139637014",
    "deterministic": true,
    "governance_safe": true,
    "replayable": true,
    "reconstructable": true,
    "anomaly_visible": true,
    "flow": {
      "real_signal": {
        "pipeline_status": "SUCCESS",
        "raw_data": {
          "weather": {
            "source": "weather_api",
            "rainfall_mm": 140,
            "storm_probability": 88,
            "timestamp": 1778139637014
          },
          "flooding": {
            "source": "flooding_feed",
            "flood_risk": 95,
            "water_level": "CRITICAL",
            "timestamp": 1778139637014
          },
          "traffic": {
            "source": "traffic_api",
            "congestion_index": 82,
            "accident_reports": 14,
            "timestamp": 1778139637014
          },
          "complaints": {
            "source": "civic_dataset",
            "complaint_volume": 420,
            "emergency_complaints": 120,
            "timestamp": 1778139637014
          }
        },
        "tantra_signals": {
          "traffic": {
            "score": 82,
            "level": "HIGH"
          },
          "flooding": {
            "score": 95,
            "level": "HIGH"
          },
          "complaints": {
            "score": 120,
            "level": "HIGH"
          },
          "weather_signal": {
            "rainfall_mm": 140,
            "storm_probability": 88
          }
        },
        "ingested_at": 1778139637014
      },
      "intelligence": {
        "current_state": {
          "trace_id": "TRACE-1778139637014",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778139637014",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778139637014
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778139637014,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          }
        },
        "history": [
          {
            "trace_id": "TRACE-1778139637014",
            "zone_id": 4,
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "trend": "STABLE",
            "behavior": "STABLE",
            "reason": "complaints override activated",
            "governance_request": {
              "governance_id": "GOV-1778139637014",
              "dominant_domain": "complaints",
              "final_score": 120,
              "final_level": "HIGH",
              "requested_action": "EMERGENCY_RESPONSE",
              "created_at": 1778139637014
            },
            "governance_response": {
              "lifecycle_state": "ESCALATED",
              "lifecycle_reason": "Critical urban condition"
            },
            "retry_data": {},
            "timestamp": 1778139637014,
            "duration_in_state_ms": 0,
            "influenced_domains": {
              "traffic": {
                "score": 102,
                "level": "HIGH",
                "influenced_by": "flooding"
              },
              "flooding": {
                "score": 95,
                "level": "HIGH"
              },
              "water_shortage": {
                "score": 70,
                "level": "MEDIUM"
              },
              "waste_overload": {
                "score": 40,
                "level": "LOW"
              },
              "complaints": {
                "score": 120,
                "level": "HIGH"
              }
            },
            "anomalies": [],
            "cluster_intelligence": {
              "propagated_zones": [
                {
                  "influenced_zone": 2,
                  "propagated_risk": 20,
                  "propagation_reason": "Zone 4 influenced neighboring zone 2"
                },
                {
                  "influenced_zone": 3,
                  "propagated_risk": 20,
                  "propagation_reason": "Zone 4 influenced neighboring zone 3"
                },
                {
                  "influenced_zone": 5,
                  "propagated_risk": 20,
                  "propagation_reason": "Zone 4 influenced neighboring zone 5"
                },
                {
                  "influenced_zone": 6,
                  "propagated_risk": 20,
                  "propagation_reason": "Zone 4 influenced neighboring zone 6"
                }
              ],
              "cluster_score": 40,
              "cluster_state": "STABLE_CLUSTER"
            },
            "confidence": {
              "confidence_score": 90,
              "confidence_reasoning": [
                "High multi-domain conflict severity"
              ]
            }
          }
        ]
      },
      "governance": {
        "lifecycle_state": "ESCALATED",
        "lifecycle_reason": "Critical urban condition"
      },
      "enforcement": {
        "enforcement_id": "ENF-1778139637016",
        "action": "DEPLOY_RESPONSE_UNITS",
        "governance_state": "ESCALATED",
        "approved": false
      },
      "resolution": {
        "resolution_status": "PENDING_GOVERNANCE",
        "feedback_timestamp": 1778139637016
      },
      "bucket_snapshot": [
        {
          "trace_id": "TRACE-1778133497159",
          "zone_id": 4,
          "dominant_domain": "flooding",
          "final_score": 95,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "flooding override activated",
          "governance_request": {
            "governance_id": "GOV-1778133497158",
            "dominant_domain": "flooding",
            "final_score": 95,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778133497158
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778133497159,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 105,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 50,
              "level": "LOW"
            },
            "complaints": {
              "score": 60,
              "level": "MEDIUM"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 35,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 100,
            "confidence_reasoning": []
          },
          "persisted_at": 1778133497160
        },
        {
          "trace_id": "TRACE-1778135768945",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778135768945",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778135768945
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778135768945,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778135768946
        },
        {
          "trace_id": "TRACE-1778135782086",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778135782086",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778135782086
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778135782086,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778135782086
        },
        {
          "trace_id": "TRACE-1778137048277",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778137048277",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778137048277
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778137048277,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778137048279
        },
        {
          "trace_id": "TRACE-1778137051231",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778137051231",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778137051231
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778137051231,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778137051232
        },
        {
          "trace_id": "TRACE-1778137335528",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778137335528",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778137335528
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778137335528,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778137335529
        },
        {
          "trace_id": "TRACE-1778138014481",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778138014481",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778138014481
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778138014481,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778138014482
        },
        {
          "trace_id": "TRACE-1778138198937",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778138198937",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778138198937
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778138198937,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778138198939
        },
        {
          "trace_id": "TRACE-1778138203311",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778138203311",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778138203311
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778138203311,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778138203311
        },
        {
          "trace_id": "TRACE-1778138341129",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778138341129",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778138341129
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778138341129,
          "duration_in_state_ms": 4374,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778138341130
        },
        {
          "trace_id": "TRACE-1778138489977",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778138489977",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778138489977
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778138489977,
          "duration_in_state_ms": 142192,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778138489977
        },
        {
          "trace_id": "TRACE-1778138681764",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778138681764",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778138681764
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778138681764,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778138681766
        },
        {
          "trace_id": "TRACE-1778138703016",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778138703016",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778138703016
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778138703016,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778138703016
        },
        {
          "trace_id": "TRACE-1778139324152",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778139324151",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778139324151
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778139324152,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778139324154
        },
        {
          "trace_id": "TRACE-1778139524420",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778139524420",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778139524420
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778139524420,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778139524422
        },
        {
          "trace_id": "TRACE-1778139637014",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778139637014",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778139637014
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778139637014,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          },
          "persisted_at": 1778139637015
        }
      ],
      "replay": [
        {
          "trace_id": "TRACE-1778139637014",
          "zone_id": 4,
          "dominant_domain": "complaints",
          "final_score": 120,
          "final_level": "HIGH",
          "trend": "STABLE",
          "behavior": "STABLE",
          "reason": "complaints override activated",
          "governance_request": {
            "governance_id": "GOV-1778139637014",
            "dominant_domain": "complaints",
            "final_score": 120,
            "final_level": "HIGH",
            "requested_action": "EMERGENCY_RESPONSE",
            "created_at": 1778139637014
          },
          "governance_response": {
            "lifecycle_state": "ESCALATED",
            "lifecycle_reason": "Critical urban condition"
          },
          "retry_data": {},
          "timestamp": 1778139637014,
          "duration_in_state_ms": 0,
          "influenced_domains": {
            "traffic": {
              "score": 102,
              "level": "HIGH",
              "influenced_by": "flooding"
            },
            "flooding": {
              "score": 95,
              "level": "HIGH"
            },
            "water_shortage": {
              "score": 70,
              "level": "MEDIUM"
            },
            "waste_overload": {
              "score": 40,
              "level": "LOW"
            },
            "complaints": {
              "score": 120,
              "level": "HIGH"
            }
          },
          "anomalies": [],
          "cluster_intelligence": {
            "propagated_zones": [
              {
                "influenced_zone": 2,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 2"
              },
              {
                "influenced_zone": 3,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 3"
              },
              {
                "influenced_zone": 5,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 5"
              },
              {
                "influenced_zone": 6,
                "propagated_risk": 20,
                "propagation_reason": "Zone 4 influenced neighboring zone 6"
              }
            ],
            "cluster_score": 40,
            "cluster_state": "STABLE_CLUSTER"
          },
          "confidence": {
            "confidence_score": 90,
            "confidence_reasoning": [
              "High multi-domain conflict severity"
            ]
          }
        }
      ],
      "ui_evolution": {
        "ui_state": "HIGH",
        "cluster_state": "STABLE_CLUSTER",
        "anomaly_visibility": []
      }
    }
  }
}
