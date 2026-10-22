"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCheck,
  ChevronLeft,
  Copy,
  FileCheck2,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Plus,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Button } from "./ui/button";
const address =
  "Demo customer · DHA Phase 5, Lahore · Confirm exact address and location pin with customer before dispatch.";
const stages = ["New order", "Accepted", "In kitchen", "Ready for rider"];
export function Simulator() {
  const [tab, setTab] = useState(0);
  const [stage, setStage] = useState(0);
  const [size, setSize] = useState("Regular");
  const [cheese, setCheese] = useState(false);
  const [receipt, setReceipt] = useState(false);
  const [cod, setCod] = useState(false);
  const [flow, setFlow] = useState(false);
  const [copied, setCopied] = useState("");
  const [sound, setSound] = useState(false);
  const reduced = useReducedMotion();
  const pizza = (size === "Large" ? 1400 : 950) + (cheese ? 200 : 0);
  const total = tab === 1 ? pizza : 1770;
  function reset(i = tab) {
    setTab(i);
    setStage(0);
    setReceipt(false);
    setCod(false);
    setFlow(false);
    setCopied("");
  }
  function advance() {
    setStage((s) => Math.min(3, s + 1));
    if (sound) {
      const context = new AudioContext();
      const osc = context.createOscillator();
      const gain = context.createGain();
      osc.connect(gain);
      gain.connect(context.destination);
      gain.gain.setValueAtTime(0.035, context.currentTime);
      osc.frequency.value = 660;
      osc.start();
      osc.stop(context.currentTime + 0.12);
      osc.onended = () => void context.close();
    }
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied("Address copied");
    } catch {
      setCopied("Copy unavailable. Select the address above.");
    }
  }
  return (
    <section
      id="demo"
      className="demo-shell"
      aria-label="Interactive product demo"
    >
      <div className="demo-toolbar">
        <div className="demo-label">
          <span className="status-dot" /> THE HASHWIFT EXPERIENCE
        </div>
        <span className="small">A little less typing. A lot more cooking.</span>
        <button
          className="icon-btn"
          onClick={() => reset()}
          aria-label="Reset demo"
        >
          <RotateCcw size={15} />
        </button>
      </div>
      <div className="demo-tabs" role="tablist" aria-label="Ordering scenarios">
        {[
          "Roman Urdu → Order",
          "Interactive menu",
          "Raast & cash on delivery",
        ].map((title, i) => (
          <button
            key={title}
            role="tab"
            id={`tab-${i}`}
            aria-controls="demo-panel"
            aria-selected={tab === i}
            onClick={() => reset(i)}
          >
            <span>0{i + 1}</span>
            {title}
          </button>
        ))}
      </div>
      <div
        id="demo-panel"
        role="tabpanel"
        aria-labelledby={`tab-${tab}`}
        className="demo-body"
      >
        <div className="chat">
          <div className="chat-header">
            <ChevronLeft size={18} />
            <div className="avatar">
              <MessageCircle size={21} />
            </div>
            <div>
              <strong>
                The Burger Lab{" "}
                <span className="verified">
                  <Check size={9} />
                </span>
              </strong>
              <small>Demo kitchen · powered by Hashwift</small>
            </div>
            <MoreHorizontal size={20} />
          </div>
          <div className="chat-content">
            <span className="today">TODAY</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {tab === 0 ? (
                  <>
                    <div className="bubble outgoing">
                      2 zinger burger, 1 peri bites aur 1.5L coke jaldi bhej
                      dein DHA Phase 5{" "}
                      <span className="chat-time">
                        8:02 PM <CheckCheck size={13} />
                      </span>
                    </div>
                    <div className="bubble incoming">
                      <span className="ai-label">
                        <Sparkles size={12} /> HASHWIFT AI
                      </span>
                      Bilkul! Here’s your order 👇
                      <div className="receipt-lines">
                        <div>
                          <span>2 × Zinger burger</span>
                          <b>Rs. 1,100</b>
                        </div>
                        <div>
                          <span>1 × Peri bites</span>
                          <b>Rs. 420</b>
                        </div>
                        <div>
                          <span>1 × Coke 1.5L</span>
                          <b>Rs. 250</b>
                        </div>
                        <div className="total">
                          <b>Total</b>
                          <b>Rs. 1,770</b>
                        </div>
                      </div>
                      <span className="tiny">
                        Delivery to DHA Phase 5 · demo prices
                      </span>
                      <span className="chat-time">
                        8:02 PM <CheckCheck size={13} />
                      </span>
                    </div>
                    <div className="chat-confirm">
                      <CheckCheck size={15} /> Order organised. Kitchen
                      notified.
                    </div>
                  </>
                ) : tab === 1 ? (
                  <>
                    <div className="bubble outgoing">
                      One pizza please. Can I customise it?
                      <span className="chat-time">
                        8:02 PM <CheckCheck size={13} />
                      </span>
                    </div>
                    <div className="bubble incoming flow">
                      <span className="ai-label">BUILD YOUR PERFECT PIZZA</span>
                      <h4>A little extra, just for you.</h4>
                      <label>
                        Pizza size
                        <select
                          value={size}
                          onChange={(e) => {
                            setSize(e.target.value);
                            setFlow(false);
                            setStage(0);
                          }}
                        >
                          <option>Regular</option>
                          <option>Large</option>
                        </select>
                      </label>
                      <label className="check-label">
                        <input
                          type="checkbox"
                          checked={cheese}
                          onChange={(e) => {
                            setCheese(e.target.checked);
                            setFlow(false);
                            setStage(0);
                          }}
                        />
                        Extra cheese <span>+ Rs. 200</span>
                      </label>
                      <Button
                        onClick={() => {
                          setFlow(true);
                          setStage(0);
                        }}
                      >
                        Confirm · Rs. {pizza.toLocaleString()}{" "}
                        <ArrowRight size={14} />
                      </Button>
                      {flow && (
                        <p role="status" className="green">
                          Pizza added to the kitchen queue.
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bubble outgoing">
                      I’ve transferred the payment. Here’s my receipt.
                      <span className="chat-time">
                        8:02 PM <CheckCheck size={13} />
                      </span>
                    </div>
                    <div className="bubble incoming">
                      <span className="ai-label">
                        <ShieldCheck size={12} /> PAYMENT, YOUR WAY
                      </span>
                      <p>
                        Attach a bank receipt for the kitchen to review, or
                        choose cash on delivery.
                      </p>
                      <button
                        className="receipt-upload"
                        onClick={() => {
                          setReceipt(true);
                          setCod(false);
                          setStage(0);
                        }}
                      >
                        <FileCheck2 size={23} />
                        {receipt
                          ? "Sample receipt attached"
                          : "Attach sample Raast receipt"}
                        <Plus size={14} />
                      </button>
                      <button
                        className="text-button"
                        onClick={() => {
                          setCod(true);
                          setReceipt(false);
                          setStage(0);
                        }}
                      >
                        Choose cash on delivery <ArrowRight size={13} />
                      </button>
                      {(receipt || cod) && (
                        <p role="status" className="green">
                          {cod
                            ? "Cash on delivery selected."
                            : "Receipt received — pending kitchen approval."}
                        </p>
                      )}
                      <span className="tiny">
                        A screenshot is not proof of settled funds.
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="chat-input">
            <Plus size={17} />
            <span>Everything happens in WhatsApp</span>
            <Send size={17} />
          </div>
        </div>
        <div className="connection">
          <span />
          <div>
            <ArrowRight size={16} />
          </div>
          <span />
        </div>
        <div className="kitchen">
          <div className="kitchen-header">
            <div className="kitchen-logo">h.</div>
            <span>Kitchen workspace</span>
            <span className="live">
              <span className="status-dot" /> Preview
            </span>
          </div>
          <div className="kitchen-title">
            <div>
              <span className="eyebrow">LET’S MAKE SOMETHING GOOD</span>
              <h3>Your kitchen, in sync.</h3>
            </div>
            <button
              className="icon-btn"
              aria-label={sound ? "Mute demo alerts" : "Enable demo alerts"}
              aria-pressed={sound}
              onClick={() => setSound(!sound)}
            >
              {sound ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
          </div>
          <div className="queue-stats">
            <div>
              <b>01</b>
              <span>Incoming</span>
            </div>
            <div>
              <b>{stage >= 2 ? "01" : "00"}</b>
              <span>In preparation</span>
            </div>
            <div>
              <b>Rs. {total.toLocaleString()}</b>
              <span>Order value</span>
            </div>
          </div>
          <div className="order-ticket">
            <div className="ticket-top">
              <span>#HW-9042</span>
              <span className="order-state">{stages[stage]}</span>
            </div>
            <div className="customer">
              <div className="customer-avatar">AK</div>
              <div>
                <strong>Ahmed K.</strong>
                <small>WhatsApp order · just now</small>
              </div>
              <span className="payment-tag">
                {tab === 2 && receipt ? "Review receipt" : "COD"}
              </span>
            </div>
            <div className="ticket-items">
              {tab === 1 ? (
                <p>
                  <span>
                    1 × {size} pizza {cheese ? " + cheese" : ""}
                  </span>
                  <b>Rs. {pizza.toLocaleString()}</b>
                </p>
              ) : (
                <>
                  <p>
                    <span>
                      <i>2×</i> Zinger burger
                    </span>
                    <b>1,100</b>
                  </p>
                  <p>
                    <span>
                      <i>1×</i> Peri bites
                    </span>
                    <b>420</b>
                  </p>
                  <p>
                    <span>
                      <i>1×</i> Coke · 1.5L
                    </span>
                    <b>250</b>
                  </p>
                </>
              )}
            </div>
            <div className="ticket-address">
              <MapPin size={14} />
              <span>
                DHA Phase 5, Lahore{" "}
                <small>Sample address · confirm pin before dispatch</small>
              </span>
            </div>
            {stage < 3 ? (
              <Button
                className="ticket-action"
                onClick={advance}
                disabled={
                  (tab === 1 && !flow) || (tab === 2 && !receipt && !cod)
                }
              >
                {stage === 0
                  ? "Accept order"
                  : stage === 1
                    ? "Move to kitchen"
                    : "Mark ready for rider"}
                <ArrowRight size={14} />
              </Button>
            ) : (
              <Button className="ticket-action" onClick={copy}>
                <Copy size={14} />
                Copy address for rider
              </Button>
            )}
            <span role="status" className="tiny">
              {copied}
            </span>
          </div>
          <div className="notification" aria-live="polite">
            <div>
              <CheckCheck size={17} />
            </div>
            <span>
              {stage === 0
                ? "One conversation. One complete order."
                : stage === 1
                  ? "“Your order has been accepted!”"
                  : stage === 2
                    ? "“Your order is now being prepared 👨‍🍳”"
                    : "“Your order is ready for pickup!”"}
              <small>
                {stage === 0
                  ? "Customer details and payment, all together."
                  : "Customer notification preview · not a real message"}
              </small>
            </span>
          </div>
        </div>
      </div>
      <div className="demo-footer">
        <ShieldCheck size={13} />
        <span>
          Interactive preview · sample orders & prices · no messages sent
        </span>
        <span className="mono">CHAT → CART → KITCHEN</span>
      </div>
    </section>
  );
}
