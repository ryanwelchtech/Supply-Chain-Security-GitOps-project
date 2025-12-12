# Use RHEL UBI 9 Minimal for reduced attack surface
FROM registry.access.redhat.com/ubi9/ubi-minimal:latest

# Set Metadata for DHS/Audit compliance
LABEL maintainer="ryan@ryanwelchtech.com" \
      security_baseline="NIST-800-53"

# Install Node.js and Update packages to remediate CVEs
RUN microdnf upgrade -y && \
    microdnf install -y nodejs npm && \
    microdnf clean all

WORKDIR /app
COPY app/ .
RUN npm install --only=production

# Non-root user for OpenShift Security Context Constraints (SCC)
USER 1001
EXPOSE 8080
CMD ["node", "server.js"]