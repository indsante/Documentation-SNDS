# if find . -iname '*.md' -not -path '*/node_modules/*' -not -path '*/tables/.schemas/*' | grep -L '<!-- SPDX-License-Identifier: MPL-2.0 -->' ; 
if find . -iname '*.md' -not -path '*/node_modules/*' -not -path '*/tables/.schemas/*' -not -path './\.*/*' -exec grep -H -E -o -c '<!-- SPDX-License-Identifier: MPL-2.0 -->' {} \; | grep :0$ ; then 
    echo "ces fichiers n'ont pas de licence"
    exit 1 
else
    echo "tous les fichiers ont une licence"
fi