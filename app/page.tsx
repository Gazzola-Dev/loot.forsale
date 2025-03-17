"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Define a type for drug names to ensure type safety
type DrugName = "Cocaine" | "Heroin" | "Acid" | "Weed" | "Speed" | "Ludes";

// Define an interface for storing drugs and their quantities/prices
interface DrugRecord {
  Cocaine: number;
  Heroin: number;
  Acid: number;
  Weed: number;
  Speed: number;
  Ludes: number;
}

export default function DrugWars() {
  const [location, setLocation] = useState("Bronx");
  // Placeholder data - these would be managed with proper state in the final implementation
  const player = {
    cash: 2000,
    debt: 5500,
    bank: 0,
    health: 100,
    day: 1,
    maxDays: 30,
    guns: 0,
  };

  const inventory: DrugRecord = {
    Cocaine: 0,
    Heroin: 0,
    Acid: 0,
    Weed: 5,
    Speed: 0,
    Ludes: 0,
  };

  const prices: DrugRecord = {
    Cocaine: 15000,
    Heroin: 5000,
    Acid: 1000,
    Weed: 300,
    Speed: 250,
    Ludes: 50,
  };

  const locations = [
    "Bronx",
    "Ghetto",
    "Central Park",
    "Manhattan",
    "Coney Island",
    "Brooklyn",
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-4">
      <div className="max-w-4xl w-full space-y-4">
        {/* Game Header */}
        <Card>
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-3xl">LOOT FOR SALE</CardTitle>
            <CardDescription>A modern take on Drug Wars (1984)</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex justify-between">
              <div className="space-y-1">
                <div className="text-sm font-medium">Cash: ${player.cash}</div>
                <div className="text-sm font-medium">Debt: ${player.debt}</div>
                <div className="text-sm font-medium">Bank: ${player.bank}</div>
              </div>
              <div className="text-center">
                <Badge
                  variant="outline"
                  className="mb-1"
                >
                  Location: {location}
                </Badge>
                <div className="text-sm">
                  Day {player.day} of {player.maxDays}
                </div>
                <Progress
                  value={(player.day / player.maxDays) * 100}
                  className="h-2 w-32 mt-1"
                />
              </div>
              <div className="space-y-1 text-right">
                <div className="text-sm font-medium">
                  Health: {player.health}%
                </div>
                <div className="text-sm font-medium">Guns: {player.guns}</div>
                <div className="text-sm font-medium">Space: 100</div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Main Game Interface */}
        <Tabs
          defaultValue="market"
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="market">Market</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="travel">Travel</TabsTrigger>
          </TabsList>
          {/* Market Tab */}
          <TabsContent
            value="market"
            className="space-y-4"
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Drug Market in {location}</CardTitle>
                <CardDescription>
                  Buy and sell goods to make a profit!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Drug</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Available</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(prices).map(([drug, price]) => (
                      <TableRow key={drug}>
                        <TableCell className="font-medium">{drug}</TableCell>
                        <TableCell>${price}</TableCell>
                        <TableCell>{Math.floor(Math.random() * 20)}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            className="mr-2"
                          >
                            Buy
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                          >
                            Sell
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Visit Loan Shark</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Loan Shark</DialogTitle>
                        <DialogDescription>
                          Need cash? I charge 10% interest per day!
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <div className="flex justify-between mb-2">
                          <span>Current Debt:</span>
                          <span>${player.debt}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cash on Hand:</span>
                          <span>${player.cash}</span>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Borrow $1000</Button>
                        <Button variant="default">Repay Debt</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Visit Bank</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Bank</DialogTitle>
                        <DialogDescription>
                          Deposit your cash for safekeeping
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <div className="flex justify-between mb-2">
                          <span>Bank Balance:</span>
                          <span>${player.bank}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cash on Hand:</span>
                          <span>${player.cash}</span>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Deposit</Button>
                        <Button variant="default">Withdraw</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardFooter>
            </Card>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full">
                  End Day (Jet to another area)
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>End Current Day?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will advance to the next day. Your debt will increase
                    by 10% interest.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>End Day</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TabsContent>
          {/* Inventory Tab */}
          <TabsContent
            value="inventory"
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle>Your Inventory</CardTitle>
                <CardDescription>
                  Check what you&apos;re carrying
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Drug</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Current Price</TableHead>
                      <TableHead>Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(inventory).map(([drug, quantity]) => (
                      <TableRow key={drug}>
                        <TableCell className="font-medium">{drug}</TableCell>
                        <TableCell>{quantity}</TableCell>
                        <TableCell>${prices[drug as DrugName]}</TableCell>
                        <TableCell>
                          ${quantity * prices[drug as DrugName]}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between w-full">
                  <div>Total Space: 100</div>
                  <div>
                    Used: {Object.values(inventory).reduce((a, b) => a + b, 0)}
                  </div>
                  <div>
                    Available:{" "}
                    {100 - Object.values(inventory).reduce((a, b) => a + b, 0)}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          {/* Travel Tab */}
          <TabsContent
            value="travel"
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle>Travel to a New Location</CardTitle>
                <CardDescription>
                  Different areas have different prices!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {locations.map((loc) => (
                    <Button
                      key={loc}
                      variant={loc === location ? "secondary" : "outline"}
                      className="h-24 text-lg"
                      disabled={loc === location}
                      onClick={() => setLocation(loc)}
                    >
                      {loc}
                    </Button>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Traveling to a new location will end your current day.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        {/* Event Log */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Game Events</CardTitle>
            <Separator />
          </CardHeader>
          <CardContent className="h-24 overflow-y-auto text-sm">
            <p>Welcome to Loot For Sale!</p>
            <p>You&apos;re starting in the Bronx with $2000.</p>
            <p>You owe the loan shark $5500. Better pay up soon!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
