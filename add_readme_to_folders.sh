#!/bin/sh
for DIRECTORY in *; do
    if [ -d "$DIRECTORY" ]; then
        echo $DIRECTORY > "$DIRECTORY"/README.md
    fi
done