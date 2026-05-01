#!/usr/bin/env bash
# IndexNow ping — push une ou plusieurs URLs à Bing/Yandex/Naver/Seznam pour indexation rapide.
#
# Usage :
#   ./scripts/indexnow-ping.sh <url1> [<url2> ...]
#
# Exemple :
#   ./scripts/indexnow-ping.sh https://www.fitmass.school/ https://www.fitmass.school/mentions-legales
#
# Requiert :
#   - Le fichier public/3e0691c7c8fd4524a49b547697972de1.txt déployé en prod (ownership proof)

set -euo pipefail

KEY="3e0691c7c8fd4524a49b547697972de1"
HOST="www.fitmass.school"
KEY_LOCATION="https://${HOST}/${KEY}.txt"

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <url1> [<url2> ...]" >&2
  exit 1
fi

# Construit le tableau JSON urlList
URL_JSON=$(printf '"%s",' "$@" | sed 's/,$//')

PAYLOAD=$(cat <<JSON
{
  "host": "${HOST}",
  "key": "${KEY}",
  "keyLocation": "${KEY_LOCATION}",
  "urlList": [${URL_JSON}]
}
JSON
)

echo "Ping IndexNow with payload :"
echo "$PAYLOAD"
echo ""

curl -fsSL -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$PAYLOAD" \
  -w "\nHTTP %{http_code}\n"
