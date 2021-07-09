#!/bin/bash
IFS=':'
echo ___INFO: création des preview pour les références externes au glossaire___ 
grep -ERio --exclude-dir={files,contribuer} --include \*.html '<a href="\.\.\/glossaire\/[^\/]+\.html">[^\/]+<\/a>' .vuepress/dist/ | wc -l
grep -ERio --exclude-dir={files,contribuer} --include \*.html '<a href="\.\.\/glossaire\/[^\/]+\.html">[^\/]+<\/a>' .vuepress/dist/ | while read -r line ; do
    if [[ $line == *":"* ]]; then
        read -a parts <<< "$line"
        seq=${parts[1]}
        file=${parts[0]}
    else
        seq=$line
    fi
    output=$(echo "$seq" | sed -e 's:<a href=":<PreviewPage link=":g' -e 's:">:" text=":g' -e 's:<\/a>:" \/>:g') 
    escaped_output=$(printf '%s\n' "$output" | sed -e 's/[]\/$*.^[]/\\&/g')
    escaped_input=$(printf '%s\n' "$seq" | sed -e 's/[]\/$*.^[]/\\&/g')
    sed -i -e "s|$escaped_input|$escaped_output|g" "$file"
done
echo ___INFO: création des preview pour les références externes aux tables___ 
grep -ERio --exclude-dir={files,contribuer} --include \*.html '<a href="\.\.\/tables\/[^\/]*\/[^\/]+\/">[^\/]+<\/a>' .vuepress/dist/ | wc -l
grep -ERio --exclude-dir={files,contribuer} --include \*.html '<a href="\.\.\/tables\/[^\/]*\/[^\/]+\/">[^\/]+<\/a>' .vuepress/dist/ | while read -r line ; do
    if [[ $line == *":"* ]]; then
        read -a parts <<< "$line"
        seq=${parts[1]}
        file=${parts[0]}
    else
        seq=$line
    fi
    output=$(echo "$seq" | sed -e 's:<a href=":<PreviewPage link=":g' -e 's:">:" text=":g' -e 's:<\/a>:" \/>:g' -e 's:\*\*::g' -e 's:README\/::g' -e 's:DCIR\/::g' -e 's:BENEFICIAIRE\/::g' -e 's:DCIR_DCIRS\/::g' -e 's:PMSI\/PMSI MCO\/::g' -e 's:PMSI\/PMSI%20MCO\/::g' -e 's:PMSI\/PMSI HAD\/::g' -e 's:PMSI\/PMSI SSR\/::g' -e 's:PMSI\/PMSI RIM-P\/::g' -e 's:DAMIR\/::g' -e 's:DCIRS\/::g' -e 's:Causes de décès\/::g' -e 's:Causes%20de%20décès::g' -e 's:CARTOGRAPHIE_PATHOLOGIES\/::g' -e 's:EGB\/::g' ) 
    escaped_output=$(printf '%s\n' "$output" | sed -e 's/[]\/$*.^[]/\\&/g')
    escaped_input=$(printf '%s\n' "$seq" | sed -e 's/[]\/$*.^[]/\\&/g')
    sed -i -e "s|$escaped_input|$escaped_output|g" "$file"
done
echo ___INFO: création des preview pour les références internes au glossaire___ 
grep -ERio --include \*.html '<a href="[^\/<]+\.html">[^\/<]+<\/a>)' .vuepress/dist/glossaire/ | wc -l
grep -ERio --include \*.html '<a href="[^\/<]+\.html">[^\/<]+<\/a>)' .vuepress/dist/glossaire/ | while read -r line ; do
    if [[ $line == *":"* ]]; then
        read -a parts <<< "$line"
        seq=${parts[1]}
        file=${parts[0]}
    else
        seq=$line
    fi
    output=$(echo "$seq" | sed -e 's:<a href=":<PreviewPage link=":g' -e 's:">:" text=":g' -e 's:<\/a>:" \/>:g')
    escaped_output=$(printf '%s\n' "$output" | sed -e 's/[]\/$*.^[]/\\&/g')
    escaped_input=$(printf '%s\n' "$seq" | sed -e 's/[]\/$*.^[]/\\&/g')
    sed -i -e "s|$escaped_input|$escaped_output|g" "$file"
done
echo ___INFO: création des preview pour les références internes aux tables___
grep -ERio --include \*.html '\[[^\/]*\]\(\/tables\/[^\/]*)' .vuepress/dist/tables/ | wc -l
grep -ERio --include \*.html '\[[^\/]*\]\(\/tables\/[^\/]*)' .vuepress/dist/tables/ | while read -r line ; do
    read -a parts <<< "$line"
    seq=${parts[1]}
    file=${parts[0]}
    output=$(echo "$seq" | sed -e 's:<a href=":<PreviewPage link=":g' -e 's:">:" text=":g' -e 's:<\/a>:" \/>:g' -e 's:DCIR\/::g' -e 's:BENEFICIAIRE\/::g' -e 's:DCIR_DCIRS\/::g' -e 's:PMSI\/PMSI MCO\/::g' -e 's:PMSI\/PMSI%20MCO\/::g' -e 's:PMSI\/PMSI HAD\/::g' -e 's:PMSI\/PMSI SSR\/::g' -e 's:PMSI\/PMSI RIM-P\/::g' -e 's:DAMIR\/::g' -e 's:DCIRS\/::g' -e 's:Causes de décès\/::g' -e 's:Causes%20de%20décès::g' -e 's:CARTOGRAPHIE_PATHOLOGIES\/::g' -e 's:EGB\/::g' ) 
    escaped_output=$(printf '%s\n' "$output" | sed -e 's/[]\/$*.^[]/\\&/g')
    escaped_input=$(printf '%s\n' "$seq" | sed -e 's/[]\/$*.^[]/\\&/g')
    sed -i -e "s|$escaped_input|$escaped_output|g" "$file"
done