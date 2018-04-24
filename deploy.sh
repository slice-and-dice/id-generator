#!/bin/sh

echo --- Logging in to Cloud Foundry...
"" | cf login -a $CF_API -u $CF_EMAIL -p $CF_PASS

echo --- Getting target space name...
APPS=`niet manifest.yml applications`
for APP in "${APPS[@]}"; do
    echo "${APP}"
    # APPS=`niet APP`
    # [[ $CF_APP_NAME == `niet APP.name` ]] && echo "$var present in the array"
done

echo --- Targeting $CF_SPACE...
cf target -s $CF_SPACE

echo --- Pushing $CF_APP_NAME to Cloud Foundry...
cf push $CF_APP_NAME
# cf blue-green-deploy id-generator-dev

echo --- Logging out of Cloud Foundry...
cf logout

echo --- Deployment of $CF_APP_NAME complete.