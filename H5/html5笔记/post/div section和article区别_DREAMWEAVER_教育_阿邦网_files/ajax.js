var ajaxRequest = false, ajaxCallback;

function AjaxRequest(strMethod, strURL, strParam)
{
	try
	{
		if (document.attachEvent)
		{
			ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}	
		else
		{
			ajaxRequest = new XMLHttpRequest;
		}
	}
	catch (e)
	{
		return false;
	}

	ajaxRequest.onreadystatechange = AjaxResponse;
	ajaxRequest.open(strMethod, strURL, true);
	if (strMethod == "post")
	{
		ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajaxRequest.setRequestHeader("Content-length", strParam.length);
		ajaxRequest.setRequestHeader("Connection", "close");
		if (strParam != null && strParam != "")
		{
			strParam = encodeURI(strParam);
			strParam = encodeURI(strParam);
		}
		ajaxRequest.send(strParam);
	}
	else if (strMethod == "get")
	{
		ajaxRequest.send(null);
	}
}

function AjaxResponse()
{
	if (ajaxRequest.readyState != 4)
		return false;

	if (ajaxRequest.status == 200)
	{
		if (AjaxCallback)
		{
			AjaxCallback();
		}
	}

	return true;
}

function GetNodeValue(obj, node)
{
	if (obj.getElementsByTagName(node)[0].firstChild != null)
		return obj.getElementsByTagName(node)[0].firstChild.nodeValue;

	return "";
}
