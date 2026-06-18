### SECURITY AUDIT: Docker Socket Exposure Found!

## Critical Risk #3 - Phase 1 Fix Required:
- Services with docker.sock mount MUST be audited and restricted.
**Watchtower (allowed)**: Only if you need auto-updates.
```yaml
# REMOVED from amp.yml, portainer.yml
volumes:
  /var/run/docker.sock:/var/run/docker.sock   <-- DANGER!

