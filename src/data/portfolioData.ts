export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Kubernetes' | 'CI/CD' | 'FinOps' | 'Security';
  timeline: string;
  image: string;
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  iacSnippet: {
    filename: string;
    language: string;
    code: string;
  };
  technologies: string[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  category: 'Edge & Ingress' | 'Service Mesh & Compute' | 'Data & Cache' | 'Observability & Telemetry';
  description: string;
  specs: string;
  security: string;
  failover: string;
  codeSnippet: string;
}

export interface PipelineStep {
  id: string;
  name: string;
  category: string;
  duration: string;
  status: 'pending' | 'running' | 'success' | 'failed';
  command: string;
  logs: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Sourav Saha',
    role: 'DevOps & Cloud Platform Engineer',
    tagline: 'Architecting resilient Kubernetes clusters, automated GitOps delivery pipelines, and cost-efficient cloud infrastructure.',
    email: 'souravsaha111000@gmail.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    location: 'Remote / Hybrid (Available for full-time opportunities)',
    experienceYears: '4+ Years Engineering Experience',
    availability: 'Open to Full-Time & Contract Roles',
    summary: 'Platform Engineer specialized in enterprise Kubernetes (EKS/GKE), Infrastructure as Code (Terraform), GitOps progressive delivery (ArgoCD), and continuous security scanning. Proven track record reducing deployment times from hours to minutes, achieving 99.98% service uptime, and cutting cloud infrastructure bills through Karpenter and spot optimization.',
  },

  stats: [
    { value: '99.98%', label: 'Production Uptime SLO', context: 'Maintained across multi-region Kubernetes clusters' },
    { value: '3.2m', label: 'Mean Time to Recovery', context: 'Automated health checks & instant canary rollbacks' },
    { value: '64%', label: 'Cloud Cost Reduction', context: 'Achieved via Karpenter autoscaler & spot automation' },
    { value: '400+', label: 'Automated Microservices', context: 'Managed through centralized ArgoCD GitOps pipelines' },
  ],

  certifications: [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      id: 'AWS-SAA-849201',
      date: 'Valid through 2027',
      focus: 'Multi-tier VPC architecture, IAM least privilege, RDS Multi-AZ, and resilient EKS topologies.',
    },
    {
      name: 'CKA: Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation (CNCF)',
      id: 'CKA-992031-LINUX',
      date: 'Valid through 2027',
      focus: 'Cluster orchestration, networking with Cilium, etcd backup/restore, ingress controllers, and RBAC security.',
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      id: 'HCTA-330192',
      date: 'Valid through 2027',
      focus: 'Modular IaC patterns, state management with S3 DynamoDB locking, Sentinel policy enforcement, and multi-cloud provisioning.',
    },
  ],

  skillCategories: [
    {
      category: 'Cloud & Infrastructure',
      skills: [
        { name: 'Amazon Web Services (AWS)', level: 'Advanced', details: 'EKS, VPC, IAM, RDS Aurora, S3, CloudFront, Route53, KMS' },
        { name: 'Google Cloud Platform (GCP)', level: 'Proficient', details: 'GKE, Cloud Run, Cloud Storage, Cloud IAM, VPC Peering' },
        { name: 'Linux System Internals', level: 'Advanced', details: 'Kernel tuning, systemd, networking (iptables/eBPF), cgroups, storage' },
        { name: 'Multi-AZ & Hybrid Cloud', level: 'Proficient', details: 'Cross-region disaster recovery, active-active topologies' },
      ],
    },
    {
      category: 'Containers & Orchestration',
      skills: [
        { name: 'Kubernetes (K8s)', level: 'Advanced', details: 'EKS, GKE, CRDs, Karpenter autoscaler, HPA, Node Affinity, PDBs' },
        { name: 'Cilium & eBPF Networking', level: 'Advanced', details: 'Kernel-level service mesh, BGP routing, L7 network security policies' },
        { name: 'Docker & OCI Runtimes', level: 'Advanced', details: 'Multi-stage builds, Distroless images, Buildx caching, containerd' },
        { name: 'Helm & Kustomize', level: 'Advanced', details: 'Reusable chart templating, schema validation, environment overlays' },
      ],
    },
    {
      category: 'Infrastructure as Code (IaC)',
      skills: [
        { name: 'Terraform & OpenTofu', level: 'Advanced', details: 'Reusable modules, remote state locking, Terragrunt, drift detection' },
        { name: 'Ansible', level: 'Proficient', details: 'Idempotent playbooks, base AMI hardening, secret management via Vault' },
        { name: 'FinOps & Infracost', level: 'Advanced', details: 'Shift-left cloud cost estimation in pull requests, spot capacity management' },
        { name: 'Policy as Code (OPA)', level: 'Proficient', details: 'Open Policy Agent Gatekeeper, Conftest, Kyverno compliance checks' },
      ],
    },
    {
      category: 'CI/CD & GitOps Delivery',
      skills: [
        { name: 'GitHub Actions & Workflows', level: 'Advanced', details: 'Reusable composite actions, matrix builds, self-hosted runners, OIDC' },
        { name: 'ArgoCD & GitOps', level: 'Advanced', details: 'Declarative cluster sync, App-of-Apps pattern, automated self-healing' },
        { name: 'Argo Rollouts', level: 'Advanced', details: 'Canary releases, Blue-Green deployments, automated Prometheus analysis' },
        { name: 'GitLab CI / Jenkins', level: 'Proficient', details: 'Declarative pipelines, shared libraries, containerized agent fleets' },
      ],
    },
    {
      category: 'Observability & SRE',
      skills: [
        { name: 'Prometheus & Alertmanager', level: 'Advanced', details: 'Custom PromQL metrics, SLO/SLA error budgets, recording rules' },
        { name: 'Grafana & Dashboards', level: 'Advanced', details: 'Production RED/USE method boards, provisioned dashboards as code' },
        { name: 'OpenTelemetry & Tracing', level: 'Proficient', details: 'Distributed spans, OTel collector pipeline, Jaeger integration' },
        { name: 'Loki & Fluentbit', level: 'Proficient', details: 'Centralized log aggregation, structured JSON parsing, retention policies' },
      ],
    },
    {
      category: 'Security & DevSecOps',
      skills: [
        { name: 'Trivy & Snyk', level: 'Advanced', details: 'Container vulnerability scanning, CVE triage, SBOM generation' },
        { name: 'Cosign & Sigstore', level: 'Advanced', details: 'Cryptographic container image signing, keyless verification in admission' },
        { name: 'HashiCorp Vault', level: 'Proficient', details: 'Dynamic credentials, Kubernetes auth method, automated secret rotation' },
        { name: 'IAM & Zero-Trust', level: 'Advanced', details: 'AWS IRSA (IAM Roles for Service Accounts), mTLS with Cilium, least privilege' },
      ],
    },
  ],

  projects: [
    {
      id: 'eks-karpenter-migration',
      title: 'Zero-Downtime EKS Multi-Region Migration',
      subtitle: 'Migrated 400+ microservices to Amazon EKS with Karpenter dynamic provisioning and Cilium eBPF',
      category: 'Kubernetes' as const,
      timeline: 'Production Deployment',
      image: '/src/assets/images/project_kubernetes_cloud_1791881583430.jpg',
      metrics: [
        { label: 'Downtime', value: '0 seconds' },
        { label: 'Compute Savings', value: '$14,200 / mo' },
        { label: 'Pod Startup Time', value: '38s down from 3m' },
        { label: 'Availability', value: '99.99%' },
      ],
      overview: 'Engineered an end-to-end migration from legacy standalone EC2 fleets to a fully automated Amazon EKS infrastructure. Replaced sluggish Cluster Autoscaler with Karpenter, allowing node provisioning in under 45 seconds using intelligent Spot/On-Demand instance blends.',
      challenge: 'The legacy setup suffered from brittle manual node scaling, frequent 15-minute deployment windows, and high compute over-provisioning costs ($32k/mo). A multi-region migration had to occur without a single second of downtime for active payment and checkout traffic.',
      solution: 'Configured Terraform modules to stand up identical green clusters in us-east-1 and us-west-2. Integrated Cilium eBPF for lightning-fast pod networking and strict L7 network policies. Implemented Route 53 weighted DNS failover and ArgoCD GitOps sync to transition live traffic incrementally.',
      architectureDetails: [
        'VPC peered across dual availability zones with private-only worker subnets',
        'Karpenter NodePools configured with diversified spot instances across 12 instance families',
        'IAM Roles for Service Accounts (IRSA) eliminating hardcoded AWS credentials',
        'PodDisruptionBudgets (PDB) guaranteeing minimum replica thresholds during automated node rollouts',
      ],
      iacSnippet: {
        filename: 'karpenter-nodepool.yaml',
        language: 'yaml',
        code: `apiVersion: karpenter.sh/v1beta1
kind: NodePool
metadata:
  name: general-compute
spec:
  template:
    spec:
      requirements:
        - key: karpenter.sh/capacity-type
          operator: In
          values: ["spot", "on-demand"]
        - key: kubernetes.io/arch
          operator: In
          values: ["amd64", "arm64"]
        - key: karpenter.k8s.aws/instance-family
          operator: In
          values: ["c6g", "c6i", "m6g", "m6i", "t4g"]
      nodeClassRef:
        name: default-ec2-node-class
  limits:
    cpu: 1000
    memory: 4000Gi
  disruption:
    consolidationPolicy: WhenUnderutilized
    expireAfter: 720h`,
      },
      technologies: ['AWS EKS', 'Karpenter', 'Terraform', 'Cilium eBPF', 'ArgoCD', 'Route 53', 'Helm'],
    },
    {
      id: 'gitops-canary-engine',
      title: 'Automated GitOps Canary Release Engine',
      subtitle: 'Production progressive delivery pipeline with real-time Prometheus SLO evaluation and automated rollbacks',
      category: 'CI/CD' as const,
      timeline: 'Internal Platform Tool',
      image: '/src/assets/images/project_cicd_pipeline_1791881584144.jpg',
      metrics: [
        { label: 'Release Incidents', value: '-92%' },
        { label: 'Deploy Frequency', value: '28 / day' },
        { label: 'Rollback MTTR', value: '< 20 seconds' },
        { label: 'Change Fail Rate', value: '0.4%' },
      ],
      overview: 'Designed a battle-tested GitOps progressive delivery platform using Argo Rollouts and GitHub Actions. Each pull request triggers automated linting, security scans, unit tests, and canary deployments that route 10% of real user traffic while querying live Prometheus latency and error rates.',
      challenge: 'Developers frequently released changes that caused undetected P99 latency spikes or edge-case 5xx errors in production, requiring stressful manual rollbacks and on-call engineer intervention.',
      solution: 'Created declarative Argo Rollout templates with automated AnalysisTemplates. If P99 latency exceeds 65ms or 5xx error rate exceeds 0.05% during the 15-minute canary evaluation window, Argo Rollouts instantly aborts the deployment and points 100% of traffic back to the stable replica set.',
      architectureDetails: [
        'GitHub Actions reusable workflows with OIDC authentication to AWS ECR (zero static credentials)',
        'Argo Rollouts traffic splitting via AWS ALB Ingress and Istio virtual services',
        'Prometheus AnalysisTemplate evaluating 5-minute rolling window HTTP success ratios',
        'Slack & PagerDuty webhook notifications triggered with diff links and rollback logs',
      ],
      iacSnippet: {
        filename: 'rollout-canary.yaml',
        language: 'yaml',
        code: `apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: order-service
spec:
  replicas: 10
  strategy:
    canary:
      analysis:
        templates:
          - templateName: latency-p99-check
        args:
          - name: service-name
            value: order-service
      steps:
        - setWeight: 10
        - pause: { duration: 5m }
        - setWeight: 25
        - pause: { duration: 10m }
        - setWeight: 50
        - pause: { duration: 10m }
      canaryService: order-service-canary
      stableService: order-service-stable`,
      },
      technologies: ['Argo Rollouts', 'GitHub Actions', 'Prometheus', 'ArgoCD', 'Istio', 'Docker Buildx'],
    },
    {
      id: 'finops-ephemeral-environments',
      title: 'FinOps: Ephemeral Preview Environments',
      subtitle: 'Automated per-PR Kubernetes namespaces with auto-sleep schedules and cost guardrails',
      category: 'FinOps' as const,
      timeline: 'Dev Productivity Initiative',
      image: '/src/assets/images/project_observability_finops_1791881585095.jpg',
      metrics: [
        { label: 'Dev Cloud Spend', value: '-64%' },
        { label: 'QA Lead Time', value: '3x Faster' },
        { label: 'Monthly Savings', value: '$9,800' },
        { label: 'Idle Waste Cleaned', value: '100%' },
      ],
      overview: 'Engineered an on-demand ephemeral staging system that provisions an isolated Kubernetes environment and dedicated database replica whenever a developer opens a GitHub PR, tearing it down automatically upon PR merge or 4 hours of inactivity.',
      challenge: 'Engineers maintained 8 static staging environments that ran 24/7, accumulating runaway cloud costs ($15k/mo) while constantly suffering from state pollution and cross-team deployment collisions.',
      solution: 'Built a lightweight GitHub Actions and Terraform automation engine that provisions a dedicated namespace with sanitized seed data, creates an SSL-enabled preview URL (e.g., `pr-142.preview.internal`), and integrates Infracost to warn PR authors if their code changes increase infrastructure costs.',
      architectureDetails: [
        'Dynamic Kubernetes namespaces with strict ResourceQuotas and LimitRanges',
        'Infracost integrated into CI pull request comments showing estimated monthly cost deltas',
        'Cron-based kube-downscaler running in non-production clusters to spin down replicas during nights/weekends',
        'Automated S3 bucket and DynamoDB preview teardown via Terraform destroy lifecycle hooks',
      ],
      iacSnippet: {
        filename: 'main.tf',
        language: 'hcl',
        code: `module "ephemeral_environment" {
  source = "./modules/preview-namespace"

  environment_name = "pr-\${var.pr_number}"
  cluster_name     = module.eks.cluster_id
  ttl_hours        = 4

  resource_limits = {
    cpu    = "4000m"
    memory = "8Gi"
  }

  tags = {
    Owner       = var.author
    Environment = "ephemeral"
    AutoCleanup = "true"
  }
}`,
      },
      technologies: ['Terraform', 'Infracost', 'Kubernetes Quotas', 'AWS Lambda', 'GitHub Actions', 'cert-manager'],
    },
    {
      id: 'devsecops-supply-chain',
      title: 'Zero-Trust DevSecOps Supply Chain',
      subtitle: 'Cryptographic container image signing, continuous CVE gates, and OPA admission controls',
      category: 'Security' as const,
      timeline: 'Security Architecture',
      image: '/src/assets/images/hero_datacenter_infrastructure_1791881583142.jpg',
      metrics: [
        { label: 'Critical CVEs in Prod', value: '0' },
        { label: 'Compliance Audit', value: '100% SOC2' },
        { label: 'Scan Overhead', value: '< 45s / build' },
        { label: 'Unsigned Images Blocked', value: '100%' },
      ],
      overview: 'Implemented an end-to-end software supply chain security framework across the CI/CD pipeline and runtime Kubernetes clusters. Enforced keyless container signing with Cosign, automated Trivy scanning in CI, and deployed OPA Gatekeeper admission webhooks.',
      challenge: 'Auditors flagged unverified container images running in production clusters with untracked vulnerabilities and excessive root privileges.',
      solution: 'Structured a CI pipeline that rejects container builds containing Critical or High CVEs with known fixes. Configured Sigstore Cosign to sign approved images into AWS ECR. Enforced OPA Gatekeeper policies at the Kubernetes API server to reject any pod running as root or lacking a verified cryptographic signature.',
      architectureDetails: [
        'Trivy automated vulnerability & misconfiguration scanning with SPDX format SBOM export',
        'Sigstore Cosign keyless image signing via GitHub Actions OIDC identity token',
        'OPA Gatekeeper mutating and validating admission controller webhooks',
        'HashiCorp Vault Agent Injector injecting short-lived database credentials directly into pod memory',
      ],
      iacSnippet: {
        filename: 'gatekeeper-constraint.yaml',
        language: 'yaml',
        code: `apiVersion: constraints.gatekeeper.sh/v1beta1
kind: K8sRequiredSignedImages
metadata:
  name: require-cosign-verification
spec:
  match:
    kinds:
      - apiGroups: [""]
        kinds: ["Pod"]
    namespaces:
      - "production"
      - "payment-gateway"
  parameters:
    issuers:
      - "https://token.actions.githubusercontent.com"
    subjectMatch: "https://github.com/company/repo*"`,
      },
      technologies: ['Sigstore Cosign', 'Trivy', 'OPA Gatekeeper', 'HashiCorp Vault', 'AWS KMS', 'Kyverno'],
    },
  ],

  architectureNodes: [
    {
      id: 'edge',
      label: 'Edge & Ingress Tier',
      category: 'Edge & Ingress' as const,
      description: 'Cloudflare WAF with DDoS mitigation & AWS ALB Ingress Controller with SSL termination via cert-manager.',
      specs: 'Global Anycast DNS, TLS 1.3 only, HTTP/2 & gRPC support, Rate Limiting 1000 req/s/IP',
      security: 'WAF OWASP Top 10 rule enforcement, Bot Management, Geolocation filtering, Strict mTLS origin pull',
      failover: 'Route 53 latency-based routing with active health probes to secondary AWS region',
      codeSnippet: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: main-ingress
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTPS":443}]'`,
    },
    {
      id: 'mesh',
      label: 'Cilium eBPF Service Mesh',
      category: 'Service Mesh & Compute' as const,
      description: 'High-performance Linux kernel-level networking, replacing kube-proxy with eBPF data path.',
      specs: '40Gbps wire throughput, sub-millisecond pod-to-pod latency, L7 protocol visibility',
      security: 'Transparent WireGuard/IPsec encryption in transit, identity-based network policies (no IP spoofing)',
      failover: 'Automatic kernel socket redirect and health-aware pod endpoint routing',
      codeSnippet: `apiVersion: cilium.io/v2
kind: CiliumNetworkPolicy
metadata:
  name: secure-billing-policy
spec:
  endpointSelector:
    matchLabels:
      app: billing-service
  ingress:
    - fromEndpoints:
        - matchLabels:
            app: api-gateway
      toPorts:
        - ports: [{ port: "8080", protocol: TCP }]`,
    },
    {
      id: 'compute',
      label: 'Amazon EKS & Karpenter Autoscaler',
      category: 'Service Mesh & Compute' as const,
      description: 'Production Kubernetes 1.30 cluster with Karpenter just-in-time worker node provisioning.',
      specs: 'Arm64 (Graviton 3) & x86-64 heterogeneous fleet, 12 diversified spot instance families',
      security: 'AWS IAM Roles for Service Accounts (IRSA), ReadOnlyRootFilesystem, non-root UID 10001',
      failover: 'Cross-AZ distribution with PodDisruptionBudgets (maxUnavailable: 1) and TopologySpreadConstraints',
      codeSnippet: `topologySpreadConstraints:
  - maxSkew: 1
    topologyKey: topology.kubernetes.io/zone
    whenUnsatisfiable: DoNotSchedule
    labelSelector:
      matchLabels:
        app: core-api`,
    },
    {
      id: 'data',
      label: 'Storage & Distributed Persistence',
      category: 'Data & Cache' as const,
      description: 'Amazon Aurora PostgreSQL Multi-AZ cluster paired with ElastiCache Redis Cluster for sub-5ms caching.',
      specs: 'Aurora Serverless v2 auto-scaling (0.5 to 64 ACUs), Redis 7.x with 3 shards & read replicas',
      security: 'AWS KMS customer-managed keys for encryption at rest, IAM database authentication, private subnets',
      failover: 'Automatic storage failover under 15 seconds, continuous automated backup snapshots to S3',
      codeSnippet: `resource "aws_rds_cluster" "aurora" {
  cluster_identifier      = "prod-aurora-cluster"
  engine                  = "aurora-postgresql"
  engine_version          = "16.1"
  database_name           = "appdb"
  storage_encrypted       = true
  kms_key_id              = aws_kms_key.rds.arn
  backup_retention_period = 30
}`,
    },
    {
      id: 'telemetry',
      label: 'Observability & SRE Control Plane',
      category: 'Observability & Telemetry' as const,
      description: 'Prometheus Operator, Grafana dashboards as code, Grafana Loki log aggregation, and OpenTelemetry collector.',
      specs: '15-second scrape interval, 30-day Prometheus metrics retention on EBS gp3, S3 Cold archive',
      security: 'RBAC-authenticated Grafana, encrypted metric streams, PII scrubbing in Fluentbit collectors',
      failover: 'Thanos multi-cluster query federation with deduplication across us-east-1 and us-west-2',
      codeSnippet: `apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: api-latency-slo
spec:
  groups:
    - name: api.rules
      rules:
        - alert: HighP99Latency
          expr: histogram_quantile(0.99, sum(rate(http_request_duration_seconds_bucket[5m])) by (le)) > 0.065
          for: 2m
          labels: { severity: critical }`,
    },
  ],

  initialPipelineSteps: [
    {
      id: 'lint',
      name: 'Code Lint & Spec Audit',
      category: 'Static Analysis',
      duration: '14s',
      status: 'success' as const,
      command: 'tflint --recursive && yamllint . && trivy config .',
      logs: [
        '[INFO] Checking Terraform syntax across 14 modules...',
        '[PASS] tflint: 0 errors, 0 warnings. All AWS provider attributes valid.',
        '[INFO] Validating Kubernetes YAML manifests against OpenAPI v1.30 schema...',
        '[PASS] yamllint: 42 files clean. Indentation and document delimiters correct.',
        '[PASS] Trivy IaC config audit: 0 high/critical misconfigurations found.',
      ],
    },
    {
      id: 'security',
      name: 'Secret & CVE Scanning',
      category: 'DevSecOps',
      duration: '22s',
      status: 'success' as const,
      command: 'gitleaks detect --verbose && snyk container test',
      logs: [
        '[INFO] Scanning git history for API keys, AWS credentials, and private certs...',
        '[PASS] Gitleaks: No leaked entropy or credentials detected in commit delta.',
        '[INFO] Querying vulnerability database for base container images...',
        '[PASS] Trivy container scan: 0 critical vulnerabilities. 2 low CVEs ignored by policy.',
        '[INFO] Generating SBOM (Software Bill of Materials) in SPDX JSON format...',
      ],
    },
    {
      id: 'build',
      name: 'Docker Multi-Stage Build & Sign',
      category: 'Artifact Delivery',
      duration: '48s',
      status: 'success' as const,
      command: 'docker buildx build --cache-from=type=registry --push && cosign sign',
      logs: [
        '[INFO] Using Docker Buildx with remote layer caching on ECR...',
        '[BUILD] Stage 1: compile Go binary with CGO_ENABLED=0... (18.4s)',
        '[BUILD] Stage 2: copy to gcr.io/distroless/static-debian12:nonroot (4.2s)',
        '[INFO] Final image size: 28.4 MB (reduced from 840 MB)',
        '[INFO] Signing image digest with Sigstore Cosign via GitHub OIDC identity...',
        '[PASS] Digest sha256:4a8b9f... successfully signed and published to registry.',
      ],
    },
    {
      id: 'iac',
      name: 'Terraform Plan & Infracost Check',
      category: 'Infrastructure',
      duration: '31s',
      status: 'success' as const,
      command: 'terraform plan -out=tfplan && infracost breakdown --path=tfplan',
      logs: [
        '[INFO] Initializing AWS provider v5.42 and remote S3 backend...',
        '[PLAN] 2 to add, 1 to change, 0 to destroy.',
        '[INFO] Evaluating cloud cost differential with Infracost...',
        '[FINOPS] Monthly cost delta: -$34.20/month (spot instance substitution)',
        '[PASS] Cost budget check passed: Within team allocated quarterly budget.',
      ],
    },
    {
      id: 'canary',
      name: 'Canary Rollout (10% Traffic)',
      category: 'Progressive Delivery',
      duration: '60s',
      status: 'success' as const,
      command: 'kubectl argo rollouts set image payment-api=* && argo rollouts status',
      logs: [
        '[INFO] Applying Argo Rollout specification to production namespace...',
        '[CANARY] Scaling canary replica set to 2 pods (10% traffic weight)',
        '[INGRESS] AWS ALB weighted routing updated: 90% stable, 10% canary',
        '[METRICS] Querying Prometheus PrometheusRule analysis...',
        '[METRICS] Canary P99 latency: 34ms (SLO threshold: < 65ms) [NOMINAL]',
        '[METRICS] 5xx HTTP Error Rate: 0.002% (SLO threshold: < 0.05%) [NOMINAL]',
      ],
    },
    {
      id: 'promote',
      name: 'Full Promotion & Verification',
      category: 'Release',
      duration: '40s',
      status: 'success' as const,
      command: 'argo rollouts promote payment-api && curl -I https://api.prod/healthz',
      logs: [
        '[INFO] Promoting canary to 100% active traffic weight...',
        '[PROGRESS] Gradually spinning down legacy replica set (graceful drain 30s)',
        '[HEALTH] Health check probe: HTTP/2 200 OK from all 10 pods',
        '[SLACK] Deployment summary sent to #devops-deployments channel',
        '[SUCCESS] Zero-downtime release completed successfully in 3m 35s.',
      ],
    },
  ],
};
