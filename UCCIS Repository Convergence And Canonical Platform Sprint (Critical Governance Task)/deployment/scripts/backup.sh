#!/bin/bash

mkdir -p backups

DATE=$(date +%Y%m%d_%H%M%S)

cp -r database backups/database_$DATE

echo "Backup Complete"