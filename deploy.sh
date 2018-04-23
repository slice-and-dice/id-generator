#!/bin/sh

echo --- Logging in to Cloud Foundry...
"" | cf login -a api.cloud.service.gov.uk -u $EMAIL -p $PASS

echo --- Switching to $CF_SPACE space...
cf target -o fsa-regulating-our-future -s $CF_SPACE

echo --- Pushing app to Cloud Foundry...
cf push

echo --- Logging out of Cloud Foundry...
cf logout

echo --- Deployment complete ($CF_SPACE).