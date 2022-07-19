<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Report;

class ReportController extends Controller
{
    public function addReport(Request $request)
    {
    	$inputs = $request->only('cause','post_id');

    	$report = new Report();

    	$report->cause = $inputs['cause'];
    	$report->post_id = $inputs['post_id'];

    	return ($report->save()?1:0);

    }

}
