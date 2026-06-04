# UCCIS MASTER DATABASE SCHEMA

## signal

id
type
source_id
confidence
timestamp

## telemetry

id
signal_id
metric_name
metric_value
captured_at

## incident

id
title
severity
location_id
status

## alert

id
incident_id
alert_type
generated_at

## recommendation

id
incident_id
recommendation_text

## decision

id
recommendation_id
decision_status

## approval

id
decision_id
approved_by

## escalation

id
incident_id
level

## intervention

id
escalation_id
action_taken

## replay

id
incident_id
replay_url

## runtime

id
service_name
status

## operator

id
name
role

## workflow_state

id
current_state

## source

id
source_name

## location

id
latitude
longitude

## uncertainty

id
value

## confidence

id
score

## timeline_checkpoint

id
checkpoint_name
timestamp
