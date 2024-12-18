import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Shield, Building2, ScrollText, Building } from "lucide-react"
import comparisonRadarImg from './assets/comparison_radar.png'
import scaleComparisonImg from './assets/scale_comparison.png'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Fireblocks vs Cobo Portal Analysis</h1>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="comparison">Feature Comparison</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="cex-advantages">CEX Advantages</TabsTrigger>
            <TabsTrigger value="pain-points">Pain Points & Solutions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Key Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={scaleComparisonImg} alt="Scale Comparison" className="w-full rounded-lg" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    Feature Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={comparisonRadarImg} alt="Feature Comparison" className="w-full rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparison">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Fireblocks Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Comprehensive Network Link for Exchanges platform</li>
                    <li>Integration with 1000+ workspaces</li>
                    <li>Advanced API and SDK support</li>
                    <li>Flexible deployment options (SaaS, Private Cloud, On-Prem)</li>
                    <li>Strong compliance tools and integrations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Cobo Portal Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SuperLoop Settlement Network for off-exchange settlement</li>
                    <li>Support for 40+ blockchain protocols</li>
                    <li>99.99% uptime SLA with multi-region deployment</li>
                    <li>Advanced risk control with automated workflows</li>
                    <li>Strong Asian market presence and regulatory expertise</li>
                    <li>Zero-fee internal transfers with near-instant settlement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recommendations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ScrollText className="h-5 w-5" />
                  Recommendations for Cobo Portal
                </CardTitle>
                <CardDescription>
                  Key areas where Cobo Portal could better appeal to CEXs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Network Effect Enhancement</strong>
                    <p className="text-gray-600 mt-1">While SuperLoop provides unique settlement advantages, expanding the network of integrated exchanges could further increase platform value.</p>
                  </li>
                  <li>
                    <strong>Global Market Expansion</strong>
                    <p className="text-gray-600 mt-1">Leverage existing Asian market dominance to expand global presence while maintaining regional expertise advantage.</p>
                  </li>
                  <li>
                    <strong>Integration Framework</strong>
                    <p className="text-gray-600 mt-1">Build on existing SDK support and API capabilities to create more streamlined exchange integration processes.</p>
                  </li>
                  <li>
                    <strong>Compliance Automation</strong>
                    <p className="text-gray-600 mt-1">Enhance existing compliance tools with more automated features for global regulatory requirements.</p>
                  </li>
                  <li>
                    <strong>Marketing Focus</strong>
                    <p className="text-gray-600 mt-1">Increase visibility of unique features like SuperLoop and multi-tier security architecture in global markets.</p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cex-advantages">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Cobo's CEX Advantages
                </CardTitle>
                <CardDescription>
                  Key areas where Cobo Portal outperforms Fireblocks for Centralized Exchanges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">SuperLoop Settlement Network</h3>
                    <p className="text-gray-600">Zero-fee internal transfers with near-instant settlement, eliminating pre-funding requirements and reducing counterparty risk.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Advanced Risk Controls</h3>
                    <p className="text-gray-600">Comprehensive on-chain and off-chain policy management with automated approval workflows and real-time monitoring.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technical Infrastructure</h3>
                    <p className="text-gray-600">99.99% uptime SLA, multi-region deployment, and support for 40+ blockchain protocols with auto-scaling capabilities.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Exchange Wallet Integration</h3>
                    <p className="text-gray-600">Unified interface for managing multiple exchange accounts with automated reconciliation and real-time balance monitoring.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Security Architecture</h3>
                    <p className="text-gray-600">Multi-tier storage with 95% cold storage, HSM integration, and regular security audits with disaster recovery options.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Regional Compliance</h3>
                    <p className="text-gray-600">Comprehensive compliance tools including Travel Rule, AML monitoring, and cross-border compliance support.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pain-points">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    CEX Pain Points & Solutions
                  </CardTitle>
                  <CardDescription>
                    Analysis of key challenges faced by Centralized Exchanges and how Cobo addresses them
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Trust and Transparency</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Pain Points</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Difficulty maintaining user trust after industry incidents</li>
                            <li>Need for verifiable proof of reserves</li>
                            <li>Challenge of demonstrating asset security</li>
                            <li>Requirements for regular audits and reporting</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Cobo Solutions</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>
                              Comprehensive audit trails and reporting
                              <div className="text-sm text-gray-500">Source: /en/apps/reports/introduction</div>
                            </li>
                            <li>
                              Multi-tier storage with 95% cold storage
                              <div className="text-sm text-gray-500">Source: /en/portal/introduction</div>
                            </li>
                            <li>
                              Transaction policy controls and monitoring
                              <div className="text-sm text-gray-500">Source: /en/portal/risk-controls/tx-policies-overview</div>
                            </li>
                            <li className="text-yellow-600">
                              Proof of reserves system (Verification pending)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Pain Points</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Complex and evolving regulatory landscape</li>
                            <li>Cross-border compliance requirements</li>
                            <li>KYC/AML implementation challenges</li>
                            <li>Varying requirements across jurisdictions</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Cobo Solutions</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li className="text-yellow-600">
                              Regional compliance expertise (Verification pending)
                            </li>
                            <li className="text-yellow-600">
                              Cross-border transaction monitoring (Verification pending)
                            </li>
                            <li className="text-yellow-600">
                              Enhanced KYC/AML capabilities (Verification pending)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Security Infrastructure</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Pain Points</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Protection against cyber threats</li>
                            <li>Secure key management</li>
                            <li>Hot/cold wallet balance optimization</li>
                            <li>Prevention of unauthorized access</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Cobo Solutions</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>
                              MPC Wallets with distributed key management
                              <div className="text-sm text-gray-500">Source: /en/portal/introduction</div>
                            </li>
                            <li>
                              Multi-tier storage architecture (hot-warm-cold)
                              <div className="text-sm text-gray-500">Source: /en/portal/introduction</div>
                            </li>
                            <li>
                              Risk control engines for unauthorized access
                              <div className="text-sm text-gray-500">Source: /en/portal/risk-controls/tx-policies-overview</div>
                            </li>
                            <li className="text-yellow-600">
                              HSM integration (Verification pending)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Operational Efficiency</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Pain Points</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Managing high transaction volumes</li>
                            <li>Cross-chain settlement delays</li>
                            <li>Complex withdrawal processes</li>
                            <li>Integration with multiple blockchains</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Cobo Solutions</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>
                              SuperLoop settlement network
                              <div className="text-sm text-gray-500">Source: /en/apps/superloop/introduction</div>
                            </li>
                            <li>
                              Batch Payouts for efficient transfers
                              <div className="text-sm text-gray-500">Source: /en/apps/batch-payouts/introduction</div>
                            </li>
                            <li>
                              API integration with WaaS 2.0
                              <div className="text-sm text-gray-500">Source: /en/portal/developer-console/</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Pain Points</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Volatile market conditions</li>
                            <li>Counterparty risk</li>
                            <li>Liquidity management</li>
                            <li>Collateral management</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Cobo Solutions</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>
                              Transaction policy controls
                              <div className="text-sm text-gray-500">Source: /en/portal/risk-controls/tx-policies-overview</div>
                            </li>
                            <li>
                              Automated approval workflows
                              <div className="text-sm text-gray-500">Source: /en/portal/risk-controls/tx-policies-overview</div>
                            </li>
                            <li className="text-yellow-600">
                              Enhanced liquidity tools (Verification pending)
                            </li>
                            <li className="text-yellow-600">
                              Real-time risk assessment (Verification pending)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
