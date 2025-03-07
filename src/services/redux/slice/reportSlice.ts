// slices/postSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";

interface ReportState {
    createReport: {
        data: any;
        loading: boolean;
        error: string | null;
    }
}

const initialState: ReportState = {
    createReport: {
        data: null,
        loading: false,
        error: null,
    }
};

const reportSlice = createSlice({
    name: "report",
    initialState,
    reducers: {
        createReportStart(state) {
            state.createReport.loading = true;
        },
        createReportSuccess(state, action: PayloadAction<{ result: { data: any } }>) {
            state.createReport = {
                ...state.createReport,
                data: action.payload.result.data,
                loading: false,
            };
        },
        createReportFailed(state, action: PayloadAction<string>) {
            state.createReport.error = action.payload;
            state.createReport.loading = false;
        },
    },
});

export const { createReportFailed, createReportStart, createReportSuccess } = reportSlice.actions;
export default reportSlice.reducer;
