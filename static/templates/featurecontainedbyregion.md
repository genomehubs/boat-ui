```template
id: featureContainedByRegion
title: Features contained by a region
description: |
  Find features that are contained by a sequence region
valueA_example: "*"
valueA_label: feature type
valueA_description: |
  Feature type to restrict results to (use `*` for all)
valueB_example: LR990071.1
valueB_label: sequence ID
valueB_description: |
  Sequence ID to search on
valueC_example: 10641457
valueC_label: start
valueC_description: |
  start coordinate of region to search for
valueD_example: 10777271
valueD_label: end
valueD_description: |
  end coordinate of region to search for
url: /search?result=feature&taxonomy=ncbi&query=feature_type%3D{valueA}%20AND%20sequence_id%3D{valueB}%20AND%20start%3E%3D{valueC}%20AND%20end%3C%3D{valueD}#feature_type%3D{valueA}%20AND%20sequence_id%3D{valueB}%20AND%20start%3E%3D{valueC}%20AND%20end%3C%3D{valueD}
```
