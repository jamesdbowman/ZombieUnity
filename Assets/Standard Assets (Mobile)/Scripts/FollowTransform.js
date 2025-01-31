//////////////////////////////////////////////////////////////
// FollowTransform.js
// Penelope iPhone Tutorial
//
// FollowTransform will follow any assigned Transform and 
// optionally face the forward vector to match for the Transform
// where this script is attached.
//////////////////////////////////////////////////////////////

#pragma strict

var targetTransform : Transform;		// Transform to follow
var faceForward : boolean = false;		// Match forward vector?
private var thisTransform : Transform;
public var distance = 10;

function Start()
{
	// Cache component lookup at startup instead of doing this every frame
	thisTransform = transform;
}

function Update () 
{
	thisTransform.position = targetTransform.position + new Vector3(0, 0, distance);
	
	if ( faceForward )
		thisTransform.forward = targetTransform.forward;
}