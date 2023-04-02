import mongoose from "mongoose";
import {loadType} from "mongoose-currency";
import CurrencyFormatter from "../utils/CurrencyFormatter.js";

const Schema = mongoose.Schema
loadType(mongoose)

const dailySchema = new Schema({
    day: String,
    revenue: {
        type: mongoose.Types.Currency,
        currency: "EUR",
        get: CurrencyFormatter.formatCurrency,
    },
    expenses: {
        type: mongoose.Types.Currency,
        currency: "EUR",
        get: CurrencyFormatter.formatCurrency,
    }
}, {toJSON: {getters: true}})

const monthSchema = new Schema({
    month: String,
    revenue: {
        type: mongoose.Types.Currency,
        currency: "EUR",
        get: CurrencyFormatter.formatCurrency,
    },
    expenses: {
        type: mongoose.Types.Currency,
        currency: "EUR",
        get: CurrencyFormatter.formatCurrency,
    },
    operationalExpenses: {
        type: mongoose.Types.Currency,
        currency: "EUR",
        get: CurrencyFormatter.formatCurrency,
    },
    nonOperationalExpenses: {
        type: mongoose.Types.Currency,
        currency: "EUR",
        get: CurrencyFormatter.formatCurrency,
    }
}, {toJSON: {getters: true}})

const KPISchema = new Schema({
    totalProfit: {
        type: mongoose.Types.Currency,
        currency: "EUR",
        get: CurrencyFormatter.formatCurrency,
    },
    totalRevenue: {
        type: mongoose.Types.Currency,
        currency: "EUR",
        get: CurrencyFormatter.formatCurrency,
    },
    totalExpenses: {
        type: mongoose.Types.Currency,
        currency: "EUR",
        get: CurrencyFormatter.formatCurrency,
    },
    expensesByCategory: {
        type: Map,
        of: {
            type: mongoose.Types.Currency,
            currency: "EUR",
            get: CurrencyFormatter.formatCurrency,
        }
    },
    monthlyData: [monthSchema],
    dailyData: [dailySchema]
}, {timestamps: true,toJSON: {getters: true}})

const KPI = mongoose.model("KPI", KPISchema)

export default KPI